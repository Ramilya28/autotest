import requests

url = "https://lalafo.kg/api/proxy/catalog/v3/categories/tree"

payload = {}
headers = {
  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTU3MTUyNjAsImFjY2Vzc190b2tlbiI6IlpGN0s1MmNQRm9DZmFKZTZWUEt5RXBoalJFX1dUTjJyIiwiYXZhdGFyIjoiaHR0cHM6XC9cL2ltZzUubGFsYWZvLmNvbVwvaVwvYXZhdGFyXC8yNVwvNGNcL2UzXC84ZTIxNDkwMTA4YTQxZDVjN2JkYTk4OTg4NC5qcGVnIiwidXNlcm5hbWUiOiJSYW1pbGlhIFNhdmFyb3ZhIiwicHJvIjpmYWxzZX0.dkej3zihOGlVp4JoToqn423PSpMUB1ip_dkcRNzEEC4',
  'Country-Id': '12',
  'Device': 'pc',
  'Experiment': 'discountlevelpurchase-discountlevelpurchase-partition-3',
  'Language': 'ru_RU',
  'Referer': 'https://lalafo.kg/account/settings',
  'User-Hash': 'e73c5746-3f93-4d49-8240-9fce6165380a',
  'Cookie': 'affinity=1733415078.144.75.183774|77d10e9a236642c6efd4b9ec0942933d'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
