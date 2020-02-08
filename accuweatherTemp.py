import aiohttp
import requests
api = "f7VAtjVl5wq9BFWGOjTbrSqjzZOVZTz0"
location = input()
key = requests.get("http://dataservice.accuweather.com/locations/v1/cities/search?apikey="+api+"&q="+location+"&language=en-us&details=false")
key1 = key.text
key2 = key1.replace(',',' ')
key2 = key1.split(" ")
key3 = key2[0]
key4 = "".join(key3)
key5 = key4.replace(',',' ')
key6 = key5.split(" ")
key7 = key6[1]
key8 = "".join(key7)
key9 = key8.replace('\"Key\":\"','')
locationKey = key9.replace('\"','')
data = requests.get("http://dataservice.accuweather.com/currentconditions/v1/"+locationKey+"?apikey="+api)
data1 = data.text
data2 = data1.replace(',',' ')
data3 = data2.split(" ")
temp1 = [i for i, elem in enumerate(data3) if 'Imperial' in elem]
temp2 = ''.join([str(i) for i in temp1])
temp3 = int(temp2)
tempFull = data3[temp3]
temp = tempFull.replace('\"Imperial\":{\"Value\":','')
print(temp)

