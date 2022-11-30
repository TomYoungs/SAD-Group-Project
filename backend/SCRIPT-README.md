# Running script to create mongo db

To use the Script you need monog shell istalled

1: open CMD
![image](https://user-images.githubusercontent.com/38881444/204358523-349b7fa1-535c-4072-b3de-e11c4ce11c3e.png)

2: navigate to folder holding ScriptToPopulate.mjs i.e. cd C:\Users\trick\Documents\GitHub\SAD-Group-Project\backend
![image](https://user-images.githubusercontent.com/38881444/204359084-0315964f-5f9f-496f-bc93-b8d7c021e6be.png)
![image](https://user-images.githubusercontent.com/38881444/204359221-01a78461-9be9-40b7-b1a3-83a110bdc354.png)

3: connect to mongo cluster i.e. mongosh "mongodb+srv://dev:jM53gfP2feN5rAWG@sadcluster.ieqbvxw.mongodb.net/ScriptTests"
![image](https://user-images.githubusercontent.com/38881444/204359414-3dcbbefc-455b-4e94-99d6-a43e7f3b3434.png)

Something of note this string will connect you to the database ScriptTests not AttendanceSystem which is where the project stores and retrives data
4: run the command load("ScriptToPopulate.mjs")
![image](https://user-images.githubusercontent.com/38881444/204359501-b18dfeec-4d24-444d-97de-815bd42ce1d5.png)
