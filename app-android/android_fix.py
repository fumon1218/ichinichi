# 안드로이드 프로젝트 손보기: 버전, 앱 이름, 아이콘
import sys,re,os,glob,shutil
from PIL import Image
A,run=sys.argv[1],int(sys.argv[2])
html=open('www/index.html',encoding='utf-8').read();m=re.search(r"APP_VER='([^']+)'",html);ver=m.group(1) if m else '1.0'
g=A+'/app/build.gradle';s=open(g).read()
s=re.sub(r'versionCode \d+','versionCode %d'%run,s);s=re.sub(r'versionName "[^"]*"','versionName "%s"'%ver,s);open(g,'w').write(s)
st=A+'/app/src/main/res/values/strings.xml';x=open(st,encoding='utf-8').read()
x=re.sub(r'(<string name="app_name">)[^<]*',r'\1이찌니찌',x);x=re.sub(r'(<string name="title_activity_main">)[^<]*',r'\1이찌니찌',x);open(st,'w',encoding='utf-8').write(x)
src=Image.open('www/icon-512.png').convert('RGBA')
for d,sz in {'mdpi':48,'hdpi':72,'xhdpi':96,'xxhdpi':144,'xxxhdpi':192}.items():
  for f in glob.glob(A+'/app/src/main/res/mipmap-%s/ic_launcher*.png'%d):src.resize((sz,sz),Image.LANCZOS).save(f)
shutil.rmtree(A+'/app/src/main/res/mipmap-anydpi-v26',ignore_errors=True)
print('android fixed',ver,run)
