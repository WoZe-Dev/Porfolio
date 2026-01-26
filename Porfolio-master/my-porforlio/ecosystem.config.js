// /var/www/woze/Porfolio/Porfolio-master/my-porforlio/ecosystem.config.js
module.exports = {
  apps : [{
    name: 'porforlio',
    script: 'npm',
    args: 'run start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      NEXT_TELEMETRY_DISABLED: 1
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    max_memory_restart: '500M',
    node_args: '--max-old-space-size=512'
  }]
};
