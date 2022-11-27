To use the Script you need monog shell istalled

1: open CMD
2: navigate to folder holding ScriptToPopulate.mjs i.e. cd C:\Users\trick\Documents\GitHub\SAD-Group-Project\backend
3: connect to mongo cluster i.e. mongosh "mongodb+srv://dev:WUjFEi5LCoi6ltgD@sadcluster.ieqbvxw.mongodb.net/ScriptTests"
Something of note this string will connect you to the database ScriptTests not AttendanceSystem which is where the project stores and retrives data
4: run the command load("ScriptToPopulate.mjs")