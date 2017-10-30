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
/etc/init.d/dnsmasq restart 2>&1