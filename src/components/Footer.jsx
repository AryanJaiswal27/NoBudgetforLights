function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "25px 20px",
        background: "#000",
        color: "#bbb",
        borderTop: "1px solid #222",
        marginTop: "60px",
        fontSize: "14px",
        letterSpacing: "0.5px"
      }}
    >
      <p style={{ margin: "5px 0", color: "#fff", fontWeight: "500" }}>
        © {new Date().getFullYear()} Aryan Jaiswal
      </p>

      <p style={{ margin: "5px 0" }}>
        Made with <span style={{ color: "#61dafb", fontWeight: "500" }}>React</span>
      </p>

      <div style={{ marginTop: "10px" }}>
        <a
          href="#"
          style={{
            color: "#888",
            margin: "0 10px",
            textDecoration: "none",
            transition: "0.3s"
          }}
        >
          GitHub
        </a>

        <a
          href="#"
          style={{
            color: "#888",
            margin: "0 10px",
            textDecoration: "none",
            transition: "0.3s"
          }}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;