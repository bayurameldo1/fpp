Farcaster Punks — Static miniapp (Vercel)

Files:
- index.html              — main static page (wallet mint client + relayer button)
- api/mint/index.js       — placeholder serverless endpoint (returns 501)
- .well-known/farcaster.json — domain manifest example (edit homeUrl/postUrl to your domain)
- public/assets/logo.png  — NOT included (using external logo URL from IPFS)

Deploy to Vercel (static, no build step):
1. Push this folder to a GitHub repo.
2. Import repo to Vercel.
3. In Vercel Project settings -> Build & Development, set:
   - Build Command: (empty)
   - Output Directory: .
4. Deploy.
5. Edit .well-known/farcaster.json 'homeUrl' and 'postUrl' to match your Vercel domain.
6. If you want server-side relayer minting, implement secure logic in api/mint/index.js and protect it with a webhook secret.

Logo used: https://chocolate-major-guan-717.mypinata.cloud/ipfs/bafybeiafbdvvk4u66oe22sv2onpiznlwulgpnmdixxh4bhb62xsrw6ms6e
OpenSea: https://opensea.io/collection/farcaster-punks-59466883/overview
Contract (read-only reference): 0x4d749dc4016936759e437b1a01d2ef0f0690e651
