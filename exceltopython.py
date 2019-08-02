import xlrd

from collections import OrderedDict

import simplejson as json

# Open the workbook and select the first worksheet
wb = xlrd.open_workbook('VegasCrime.xlsx')
sh = wb.sheet_by_index(0)
# List to hold dictionaries
data_list = []
count = 0
rownum = 2
# Iterate through each row in worksheet and fetch values into dict
while count < 1000:
    data = OrderedDict()
    row_values = sh.row_values(rownum)
    data['city'] = "Las Vegas"
    data['date'] = row_values[1]
    if (row_values[8] == ""):
        rownum += 1
        continue

    latlng = row_values[8][1:-1]
    lat = row_values[8][1:row_values[8].find(",", 0)]
    if (lat == "-1.0"):
        rownum += 1
        continue
    long = row_values[8][row_values[8].find(",", 0) + 2:-1]


    #data['latitude'] = row_values[23]
    #data['longitude'] = row_values[24]
    data['latitude'] = float(lat)
    data['longitude'] = float(long)
    data['typeOfCrime'] = row_values[2]
    data_list.append(data)
    rownum += 1
    count += 1
#data_list = {'intents': data_list} # Added line
# Serialize the list of dicts to JSON
j = json.dumps(data_list)
# Write to file
with open('vegasjson.json', 'w') as f:
    f.write(j)
