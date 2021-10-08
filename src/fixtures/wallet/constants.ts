export const WEB3_PROVIDER_ENDPOINT = process.env.IS_PREVIEW
  ? 'https://eth-rinkeby.alchemyapi.io/v2/p6Ro8XXVPG9P2OYs6apg7HqKOUXyB8CW' // For Staging
  : process.env.NODE_ENV === 'production'
  ? 'https://eth-mainnet.alchemyapi.io/v2/MqkWFPh_8_YZNmPZuChVFra3Y0ENTMyS' // For Production build
  : 'https://eth-mainnet.alchemyapi.io/v2/p56_qS-3ABDzHGg9kQ-kyqqbQVNJmzUB' // For Local Development
