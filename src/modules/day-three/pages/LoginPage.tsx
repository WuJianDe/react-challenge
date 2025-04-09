import { useState } from "react";
import { Card, Input, Button, Form, message } from "antd";
import { useAuth } from "../../../context/AuthContext";
import styles from "../styles/login.module.scss";

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { setUsername } = useAuth();

  const [messageApi, contextHolder] = message.useMessage();
  const handleLogin = async (values: {
    username: string;
    password: string;
  }) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500)); // 模擬 API 請求
      messageApi.success("Login successful!");
      setUsername(values.username);
    } catch (error) {
      console.log(error);
      messageApi.error("Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="登入" className={styles["card"]}>
      {contextHolder}
      <Form onFinish={handleLogin} layout="vertical">
        <Form.Item
          label="使用者名稱"
          name="username"
          rules={[{ required: true, message: "請輸入使用者名稱" }]}
        >
          <Input placeholder="請輸入使用者名稱" />
        </Form.Item>
        <Form.Item
          label="密碼"
          name="password"
          rules={[{ required: true, message: "請輸入密碼" }]}
        >
          <Input.Password placeholder="請輸入密碼" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            登入
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginPage;
