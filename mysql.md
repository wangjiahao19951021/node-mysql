# 启动mysql（已经配置好,cmd下）-u名字 -p密码
mysql -uroot -proot

# 显示数据库列表
show databases;

# 创建某个数据库
create database 名字;

# 删除某个数据库
drop database 名字;

# 使用某个数据库
use 数据库名字;

# 使用了某个数据库后显示所有表
show tables;

# 创建表 (DEFAULT '')默认为空 (AUTO_INCREMENT)自增 (PRIMARY KEY)主键 (COMMENT)备注
CREATE TABLE IF NOT EXISTS `ceshi`(
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `name` char(10) NOT NULL DEFAULT '',
   `date` datetime NOT NULL,
   `singin` tinyint(4) NOT NULL DEFAULT '0' COMMENT '登录次数',
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
# 添加数据
INSERT INTO `ceshi` VALUES ('1', '小明', '2016-04-22 15:25:33', '1'), ('2', '小王', '2016-04-20 15:25:47', '3'), ('3', '小丽', '2016-04-19 15:26:02', '2'), ('4', '小王', '2016-04-07 15:26:14', '4'), ('5', '小明', '2016-04-11 15:26:40', '4'), ('6', '小明', '2016-04-04 15:26:54', '2');

# 读取某个表中所有数据
select * from 表名;
# 查询某个字段的数据
select password from users;

# 导出所有数据
mysqldump -u root -p --all-databases > F:/shuju/shuju.sql
mysqldump -u root -p --all-databases > F:/shuju/shuju.txt
# 备份事件表
mysqldump -u root -p --events --ignore-table=mysql.events --all-databases > F:/shuju/shuju.sql
mysqldump -u root -p --events --ignore-table=mysql.events --all-databases > F:/shuju/shuju.txt

# 插入某条数据
insert into users (user, password) values ('陈志浩', '王家浩');
# 多条数据
insert into users (user, password) values ('王', 27), ('孙', 15), ('李', 28), ('马', 40), ('刘', 33);

# 删除某条数据
delete from users where id = '6';

# 清空表内容
truncate table users;

# 更新users表中某条数据的操作
update users set user = '王' where id = 5;

# 获取表中password字段以2开头的数据
select * from users where password like '2%';

# 排序 asc(升序) desc(降序) 以password字段的排序
select * from users order by password asc;

# 查询users表中前3条数据
select * from users limit 0, 2;