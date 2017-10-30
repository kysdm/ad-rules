#!/bin/sh
#kysdm(gxk7231@gmail.com)

sed -i '/lol.qq.com/d' /etc/dnsmasq.conf
sed -i '/tcdn.qq.com/d' /etc/dnsmasq.conf
sed -i '/tgp.qq.com/d' /etc/dnsmasq.conf
sed -i '/battlenet.com/d' /etc/dnsmasq.conf
sed -i '/blizzard.com/d' /etc/dnsmasq.conf
sed -i '/battle.net/d' /etc/dnsmasq.conf
sed -i '/blizzard.cn/d' /etc/dnsmasq.conf
sed -i '/battlenet.com.cn/d' /etc/dnsmasq.conf

echo "address=/.lol.qq.com/223.6.6.6" >> /etc/dnsmasq.conf
echo "address=/.tcdn.qq.com/223.6.6.6     #tgp测速" >> /etc/dnsmasq.conf
echo "address=/.tgp.qq.com/223.6.6.6     #tgp" >> /etc/dnsmasq.conf
echo "address=/.battlenet.com/127.0.0.1" >> /etc/dnsmasq.conf  
echo "address=/.blizzard.com/127.0.0.1" >> /etc/dnsmasq.conf
echo "address=/.battle.net/127.0.0.1" >> /etc/dnsmasq.conf
echo "address=/.blizzard.cn/127.0.0.1" >> /etc/dnsmasq.conf
echo "address=/.battlenet.com.cn/127.0.0.1" >> /etc/dnsmasq.conf

/etc/init.d/dnsmasq restart 2>&1