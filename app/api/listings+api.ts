import { ExpoRequest, ExpoResponse } from "expo-router/server";
const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: ExpoRequest) {
  // const limit = request.expoUrl.searchParams.get("limit") || 5;

  // const response = await fetch(
  //   `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${limit}&convert=NGN`,
  //   {
  //     headers: {
  //       "X-CMC_PRO_API_KEY": API_KEY!,
  //     },
  //   }
  // );

  // const res = await response.json();

  return ExpoResponse.json(data);
}

const data =[
  {
      "id": 1,
      "name": "Bitcoin",
      "symbol": "BTC",
      "slug": "bitcoin",
      "num_market_pairs": 10957,
      "date_added": "2010-07-13T00:00:00.000Z",
      "tags": [
          "mineable",
          "pow",
          "sha-256",
          "store-of-value",
          "state-channel",
          "coinbase-ventures-portfolio",
          "three-arrows-capital-portfolio",
          "polychain-capital-portfolio",
          "binance-labs-portfolio",
          "blockchain-capital-portfolio",
          "boostvc-portfolio",
          "cms-holdings-portfolio",
          "dcg-portfolio",
          "dragonfly-capital-portfolio",
          "electric-capital-portfolio",
          "fabric-ventures-portfolio",
          "framework-ventures-portfolio",
          "galaxy-digital-portfolio",
          "huobi-capital-portfolio",
          "alameda-research-portfolio",
          "a16z-portfolio",
          "1confirmation-portfolio",
          "winklevoss-capital-portfolio",
          "usv-portfolio",
          "placeholder-ventures-portfolio",
          "pantera-capital-portfolio",
          "multicoin-capital-portfolio",
          "paradigm-portfolio",
          "bitcoin-ecosystem",
          "ftx-bankruptcy-estate"
      ],
      "max_supply": 21000000,
      "circulating_supply": 19674731,
      "total_supply": 19674731,
      "infinite_supply": false,
      "platform": null,
      "cmc_rank": 1,
      "self_reported_circulating_supply": null,
      "self_reported_market_cap": null,
      "tvl_ratio": null,
      "last_updated": "2024-04-06T10:14:00.000Z",
      "quote": {
          "NGN": {
              "price": 87835321.2437461,
              "volume_24h": 36748898697599.875,
              "volume_change_24h": -24.7966,
              "percent_change_1h": -0.40683244,
              "percent_change_24h": 1.3595002,
              "percent_change_7d": -3.08980839,
              "percent_change_30d": 1.52657385,
              "percent_change_60d": 58.16563262,
              "percent_change_90d": 54.27515701,
              "market_cap": 1728136317769290,
              "market_cap_dominance": 52.6066,
              "fully_diluted_market_cap": 1844541746118666.2,
              "tvl": null,
              "last_updated": "2024-04-06T10:13:01.000Z"
          }
      }
  },
  {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "num_market_pairs": 8730,
      "date_added": "2015-08-07T00:00:00.000Z",
      "tags": [
          "pos",
          "smart-contracts",
          "ethereum-ecosystem",
          "coinbase-ventures-portfolio",
          "three-arrows-capital-portfolio",
          "polychain-capital-portfolio",
          "binance-labs-portfolio",
          "blockchain-capital-portfolio",
          "boostvc-portfolio",
          "cms-holdings-portfolio",
          "dcg-portfolio",
          "dragonfly-capital-portfolio",
          "electric-capital-portfolio",
          "fabric-ventures-portfolio",
          "framework-ventures-portfolio",
          "hashkey-capital-portfolio",
          "kenetic-capital-portfolio",
          "huobi-capital-portfolio",
          "alameda-research-portfolio",
          "a16z-portfolio",
          "1confirmation-portfolio",
          "winklevoss-capital-portfolio",
          "usv-portfolio",
          "placeholder-ventures-portfolio",
          "pantera-capital-portfolio",
          "multicoin-capital-portfolio",
          "paradigm-portfolio",
          "injective-ecosystem",
          "layer-1",
          "ftx-bankruptcy-estate"
      ],
      "max_supply": null,
      "circulating_supply": 120068468.5458804,
      "total_supply": 120068468.5458804,
      "infinite_supply": true,
      "platform": null,
      "cmc_rank": 2,
      "self_reported_circulating_supply": null,
      "self_reported_market_cap": null,
      "tvl_ratio": null,
      "last_updated": "2024-04-06T10:13:00.000Z",
      "quote": {
          "NGN": {
              "price": 4320801.886617439,
              "volume_24h": 16062745145153.512,
              "volume_change_24h": -21.0455,
              "percent_change_1h": -0.32793247,
              "percent_change_24h": 1.75439404,
              "percent_change_7d": -4.99551247,
              "percent_change_30d": -12.14215712,
              "percent_change_60d": 43.29446855,
              "percent_change_90d": 49.22912764,
              "market_cap": 518792065416306.6,
              "market_cap_dominance": 15.7927,
              "fully_diluted_market_cap": 518792065416306.44,
              "tvl": null,
              "last_updated": "2024-04-06T10:13:01.000Z"
          }
      }
  },
  {
      "id": 825,
      "name": "Tether USDt",
      "symbol": "USDT",
      "slug": "tether",
      "num_market_pairs": 81532,
      "date_added": "2015-02-25T00:00:00.000Z",
      "tags": [
          "payments",
          "stablecoin",
          "asset-backed-stablecoin",
          "avalanche-ecosystem",
          "solana-ecosystem",
          "arbitrum-ecosytem",
          "moonriver-ecosystem",
          "injective-ecosystem",
          "bnb-chain",
          "usd-stablecoin",
          "optimism-ecosystem"
      ],
      "max_supply": null,
      "circulating_supply": 106814507935.07361,
      "total_supply": 110942615136.74486,
      "platform": {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
      },
      "infinite_supply": true,
      "cmc_rank": 3,
      "self_reported_circulating_supply": null,
      "self_reported_market_cap": null,
      "tvl_ratio": null,
      "last_updated": "2024-04-06T10:13:00.000Z",
      "quote": {
          "NGN": {
              "price": 1294.5647722355395,
              "volume_24h": 70328532471962.38,
              "volume_change_24h": -23.7362,
              "percent_change_1h": -0.02756983,
              "percent_change_24h": 0.00586665,
              "percent_change_7d": -0.06183195,
              "percent_change_30d": -0.06720303,
              "percent_change_60d": 0.08051602,
              "percent_change_90d": -0.06603395,
              "market_cap": 138278299136419.8,
              "market_cap_dominance": 4.2094,
              "fully_diluted_market_cap": 143622401295714.8,
              "tvl": null,
              "last_updated": "2024-04-06T10:13:01.000Z"
          }
      }
  },
  {
      "id": 1839,
      "name": "BNB",
      "symbol": "BNB",
      "slug": "bnb",
      "num_market_pairs": 2132,
      "date_added": "2017-07-25T00:00:00.000Z",
      "tags": [
          "marketplace",
          "centralized-exchange",
          "payments",
          "smart-contracts",
          "alameda-research-portfolio",
          "multicoin-capital-portfolio",
          "bnb-chain",
          "layer-1",
          "sec-security-token",
          "alleged-sec-securities",
          "celsius-bankruptcy-estate"
      ],
      "max_supply": null,
      "circulating_supply": 149535189.56766236,
      "total_supply": 149535189.56766236,
      "infinite_supply": false,
      "platform": null,
      "cmc_rank": 4,
      "self_reported_circulating_supply": null,
      "self_reported_market_cap": null,
      "tvl_ratio": null,
      "last_updated": "2024-04-06T10:13:00.000Z",
      "quote": {
          "NGN": {
              "price": 753603.7830224965,
              "volume_24h": 2044187640678.117,
              "volume_change_24h": -28.5532,
              "percent_change_1h": -0.33085311,
              "percent_change_24h": 0.93677638,
              "percent_change_7d": -3.33191714,
              "percent_change_30d": 34.18837325,
              "percent_change_60d": 92.19691004,
              "percent_change_90d": 89.38102698,
              "market_cap": 112690284553176.5,
              "market_cap_dominance": 3.4304,
              "fully_diluted_market_cap": 112690284553180.38,
              "tvl": null,
              "last_updated": "2024-04-06T10:13:01.000Z"
          }
      }
  },
  {
      "id": 5426,
      "name": "Solana",
      "symbol": "SOL",
      "slug": "solana",
      "num_market_pairs": 649,
      "date_added": "2020-04-10T00:00:00.000Z",
      "tags": [
          "pos",
          "platform",
          "solana-ecosystem",
          "cms-holdings-portfolio",
          "kenetic-capital-portfolio",
          "alameda-research-portfolio",
          "multicoin-capital-portfolio",
          "okx-ventures-portfolio",
          "layer-1",
          "ftx-bankruptcy-estate",
          "sec-security-token",
          "alleged-sec-securities",
          "cmc-crypto-awards-2024"
      ],
      "max_supply": null,
      "circulating_supply": 444919016.8094141,
      "total_supply": 573349552.0827674,
      "infinite_supply": true,
      "platform": null,
      "cmc_rank": 5,
      "self_reported_circulating_supply": null,
      "self_reported_market_cap": null,
      "tvl_ratio": null,
      "last_updated": "2024-04-06T10:13:00.000Z",
      "quote": {
          "NGN": {
              "price": 228681.59468109338,
              "volume_24h": 10952086008659.104,
              "volume_change_24h": 70.2205,
              "percent_change_1h": -0.81374187,
              "percent_change_24h": 2.48564957,
              "percent_change_7d": -10.01371531,
              "percent_change_30d": 25.47037915,
              "percent_change_60d": 84.86622606,
              "percent_change_90d": 89.02714356,
              "market_cap": 101744790267921,
              "market_cap_dominance": 3.0972,
              "fully_diluted_market_cap": 131114489879974.1,
              "tvl": null,
              "last_updated": "2024-04-06T10:13:01.000Z"
          }
      }
  }
]