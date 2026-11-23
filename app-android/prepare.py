# 웹 index.html 을 앱용으로: 맨 앞에 native.js 끼워 넣기
import sys
p,js=sys.argv[1],sys.argv[2]
s=open(p,encoding='utf-8').read();n=open(js,encoding='utf-8').read()
import re
s=re.sub(r"<script>if\('serviceWorker' in navigator\).*?</script>",'',s,flags=re.S)
i=s.index('<head>')+len('<head>')
s=s[:i]+'\n<script>'+n+'</script>\n'+s[i:]
open(p,'w',encoding='utf-8').write(s);print('prepared',len(s))
