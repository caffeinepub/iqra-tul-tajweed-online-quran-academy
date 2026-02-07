# Custom Domain Setup for Internet Computer Deployment

This document explains how to configure a custom domain for your Internet Computer hosted application.

## Your Custom Domain

The intended custom domain for this application is:
**https://www.iqratultajweedonlinequranacademy.com**

## Important Notes

⚠️ **This application cannot automatically claim or configure your custom domain.** Domain ownership and DNS configuration must be managed outside of this codebase through your domain registrar and DNS provider.

The deployed canister will continue to work independently at its Internet Computer URL (e.g., `https://[canister-id].icp0.io` or `https://[canister-id].raw.icp0.io`).

## High-Level Setup Steps

To point your custom domain to your Internet Computer deployment, you will need to:

### 1. Own the Domain
- Purchase and register the domain `iqratultajweedonlinequranacademy.com` through a domain registrar (e.g., Namecheap, GoDaddy, Google Domains, Cloudflare).

### 2. Configure DNS Records
You have two main options for DNS configuration:

#### Option A: CNAME Record (Recommended)
- Add a CNAME record in your DNS settings:
  - **Host/Name**: `www` (or `@` for root domain, if supported)
  - **Value/Target**: `icp1.io` or your specific canister boundary node
  - **TTL**: 3600 (or automatic)

#### Option B: A Record
- Add an A record pointing to the Internet Computer boundary node IP addresses
- Contact Internet Computer documentation for current IP addresses

### 3. Configure Internet Computer Canister
After DNS is configured, you need to register your custom domain with your canister:

