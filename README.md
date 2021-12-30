# bmiui
See https://eqdn.tech/reactjs-bmi-calculator/
and https://codesandbox.io/u/ridbay
for rewritten source

To Run Locally
--------------
npm start

Invalidate Cloudfront Cache
----------------------------
aws cloudfront create-invalidation --distribution-id E3G6TPC0I48XX9 --paths "/*"
