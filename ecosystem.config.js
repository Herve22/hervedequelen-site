module.exports = {
  apps: [
    {
      name: "hervedequelen-site",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        RESEND_API_KEY: "re_8xDDVDzA_JNWQ8HxFZmRq1LUmxqvnHgDo"
      }
    }
  ]
};
