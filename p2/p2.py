import requests
from bs4 import BeautifulSoup   #引入库
import bs4

def gethtml(url):
    try :
        r = requests.get(url,timeout=30)
        r.raise_for_status()
        r.encoding = r.apparent_encoding
        return  r.text
    except :
        return  ""           #获取网页内容
def filllist(ulist,html):
    soup = BeautifulSoup(html,"html.parser")
    for tr in soup.find('table').children :      #遍历出table下的所有tr
        if isinstance(tr,bs4.element.Tag) :
            tds = tr('td')
            ulist.append(tds[0].string,tds[1].string)

def printlist(ulist,num):
    print("{:^10}\t{:^10}".format("活动","时间"))
    for i in range(num):
        u=ulist[i]
        print("{:^10}\t{:^10}".format(u[0],u[1]))   #打印出

    def main ():
        uinfo =[]
        url ='http://www.hhu.edu.cn'
        html =gethtml(url)
        filllist(uinfo,html)
        printlist(uinfo,5)   #前五组河海大学的新闻
        main
