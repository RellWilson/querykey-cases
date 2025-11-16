import os, requests
TOKEN = os.environ.get('YOUR_TOKEN')
r = requests.get('https://api.querykey.com/v2/cases/search',
  params={'q':'TypeError','limit':5},
  headers={'Authorization': f'Bearer {TOKEN}'})
print(r.json())
