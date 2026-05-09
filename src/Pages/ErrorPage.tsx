import { Link } from "react-router";
import type { CSSProperties } from "react";

const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.errorCode}>404</h1>
        <h2 style={styles.title}>Page Not Found</h2>
        <p style={styles.description}>
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" style={styles.link}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    fontFamily: "Arial, sans-serif",
  },
  content: {
    textAlign: "center",
    background: "white",
    padding: "60px 40px",
    borderRadius: "10px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
    maxWidth: "500px",
  },
  errorCode: {
    fontSize: "120px",
    margin: "0",
    color: "#667eea",
    fontWeight: "bold",
  },
  title: {
    fontSize: "32px",
    margin: "10px 0",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    color: "#666",
    margin: "20px 0 30px",
    lineHeight: "1.6",
  },
  link: {
    display: "inline-block",
    padding: "12px 30px",
    background: "#667eea",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "16px",
    transition: "background 0.3s ease",
  },
};

export default ErrorPage;