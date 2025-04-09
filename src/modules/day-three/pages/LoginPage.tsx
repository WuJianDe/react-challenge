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
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API request
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
    <Card title="Login" className={styles["card"]}>
      {contextHolder}
      <Form onFinish={handleLogin} layout="vertical">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input placeholder="Please enter your username" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password placeholder="Please enter your password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginPage;
