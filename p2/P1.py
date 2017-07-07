import requests
import re
def gethtml(url):
    try :
        r=requests.get(url,timeout=30)
        r.raise_for_status()
        r.encoding=r.apparent_encoding
        return r.text
    except:
        return ""
def parsepage(ilt,html):
    try :
        plt=re.findall(r'\"view_price\"\[\d\.]*\" ',html)
        tlt=re.finddall(r'\"raw_title\"\:\".*?\" ',html)    #获取标签内容
        for i in range(len(plt)):
            price =eval(plt[i].split(':')[1])
            title=eval(tlt[i].split(':')[1])
            ilt.append([price,title])
    except :
        print("")

def printgoodslist(ilt) :
    tplt="{:4}\t{:8}\t{:16}"
    print(tplt.format("序号","价格","商品名称"))
    count=0
    for g in ilt:
        count=count+1
        print(tplt.format(count,g[0],g[1]))
def main():
         goods='书包'
         depth=2
         start_url="https://s.taobao.com/search?q="+goods
         infoList=[]
         for i in range(depth):
             try:
                 url=start_url+'&s='+str(44*i)    #页面有一个变量s是44的倍数，以这个来翻页
                 html=gethtml(url)
                 parsepage(inoLise,html)
             except :
                 continue              #打印出两页的内容
                 printgoodslist(infoList)
                 main()

