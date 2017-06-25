#include <iostream>
#include <cstring>
using namespace std;
int main()
{
	int n;
	void Add(char a[],char b[],char d[]);
	char a[100]={'0'} ,b[100]={'0'},d[100];  //要进行大数运算 longlong不够 
	 a[0]='1';b[0]='1';       //初始数值
	 cout<<"1"<<":"<<1<<endl<<"2"<<":"<<1<<endl;	 
	for(n=3;n<101;n++)
	{
	 Add(a,b,d);
	 cout<<n<<":"<<d<<endl;
	 strcpy(a,b);
	 strcpy(b,d);
	}
	    
	return 0;
} 
 void Add(char a[],char b[],char d[])
  {
    char c[10001];
    int lena=strlen(a),lenb=strlen(b);
    int i,len;
    len=lenb+1;   //因为lenb大于或者等于lena 
    c[0]='\0';    //因为最后要倒序 
    for(i=1;i<=len;i++)c[i]='0';
    for(i=1;i<=lena;i++)c[i]+=a[lena-i]-48;
    for(i=1;i<=lenb;i++)c[i]+=b[lenb-i]-48;//实现加法运算 
    for(i=0;i<=len;i++)
        if(c[i]>57)
         {
             c[i]-=10;
             c[i+1]++;
         }             //进位处理 
 
    for(i=len;i>1;i--)
        if(c[i]==48)len--;  //首数字部位零 
         else break;
    for(i=0;i<=len;i++)
         d[i]=c[len-i];
} 
