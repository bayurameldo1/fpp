Farcaster Punks — Static Mini App (client-only)
Files:
- index.html        (root)
- .well-known/farcaster.json  (manifest)

Instructions:
1) Edit .well-known/farcaster.json accountAssociation values with a signed manifest.
   If you already generated a signed manifest in Warpcast tools, paste values here.
2) Deploy to Vercel (static project) or any static host.
   - On Vercel: create a new project, link repo, set build command blank and output directory `.` so Vercel serves index.html directly.
3) Verify manifest in Warpcast: https://<your-domain>/.well-known/farcaster.json
   Use exact same homeUrl when previewing in Warpcast (include trailing slash if present).
4) If Warpcast preview says 'No embed found', check:
   - homeUrl exact match
   - no X-Frame-Options: DENY header (static Vercel default is OK)
   - site is accessible via https
5) To change logo, edit index.html image src and manifest imageUrl.

Notes:
- This is client-only static miniapp. It does not perform server-side minting.
- For real mint via SeaDrop you need server side relayer or user wallet integration (not included).
