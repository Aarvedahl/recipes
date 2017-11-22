
import MySQLdb as mdb
con = mdb.connect(host="localhost",user="root",
              passwd="password",db="food")
cur = con.cursor()
cur.execute("SELECT * FROM ingredients")

rows = cur.fetchall()

for row in rows:
    print (row)
