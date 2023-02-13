from sys import argv
import pandas as pd
import matplotlib.pyplot as plt 
from alpha_vantage.timeseries import TimeSeries 

# api_key = 

ts = TimeSeries(api_key, output_format = 'pandas')

stock = argv[1]

data, meta = ts.get_monthly(stock)

data.to_csv("{}.csv".format(stock)) 


