module.exports = {
  apps: [
    {
      name: "hervedequelen-site",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        RESEND_API_KEY: "re_31BA3qG7_GjPoFH21mKQ8PALxxzLxrUqT"
      }
    }
  ]
};
