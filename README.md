# nodejs_note
หัดทำ note ใช้สำหรับแผนก IT 

📝 สำหรับโปรเจคต์นี้เป็นการลองทำ Note เอาไว้ใช้ในแผนก ซึ่งผมอยากฝึกเขียน rest_api โดยใช้ nodejs บ้าง (หลังจากทำใน django) 
และอยากรู้ว่า พวกแอพ note เนี่ยเขาทำกันยังไง เพราะ content มันอิสระมาก มีได้ text , image  แถมบาง note สามารถแต่ง text เป็นสีต่างๆได้อีก
แล้วตอนเก็บลงฐานข้อมูลเขาทำกันยังไง 

องค์ประกอบที่เกี่ยวข้อง : 
- node.js
- express
- MongoDB
- Quill.js ( เป็น rich editor ที่ผมเอามาใช้ในการทำ note content )

✅สิ่งที่ผิดพลาดและได้เรียนรู้ : 
- พอมาเขียนด้วย javascript , html เป็นหลัก ทำให้ได้เรียนรู้โครงสร้างในการทำโปรเจคต์อีกแบบ
- เมื่อหน้าเว็บเรามีการ ส่งต่อของข้อมูล ( add , edit , delete ) ต้องระวัง request syntax ดีๆ ไม่งั้นพลาดแล้วข้อมูลไปต่อไม่ได้ (GET,POST,PUT) 
- ถ้าเรามีความเข้าใจลักษณะข้อมูล จะทำให้การออกแบบ ฐานข้อมูล และ ตัวหน้าเว็บ ให้รับ-ส่ง กันได้ smooth

Overview การใช้งาน : 
- สามารถสร้าง note ใหม่ได้
- note ที่ถูกสร้างแล้ว สามารถ edit(update) ได้
- สามารถลบ note ได้
- สามารถ แต่ง(customize) content ได้
- สามารถแนบรูป ใน content ได้

![image](https://github.com/zRedHox/nodejs_note/assets/30298730/862fe85e-a60b-4707-8940-e8433209241e)
![image](https://github.com/zRedHox/nodejs_note/assets/30298730/4274725f-c799-4c8b-9ee3-beba5c15a86e)
![image](https://github.com/zRedHox/nodejs_note/assets/30298730/7e2872b6-8c0a-4428-8e20-30b67679534e)


✅หลังทำเสร็จ ได้ อัพเลเวลไปอีกอย่างในการลองทำ rest_api เก็บลง mongoDB 
- พี่ๆในแผนกก็ชอบกันมาก จากเดิมเวลาจะเก็บ content อะไรก็ก็ต้องทำใส่เอกสารแล้วอัพขึ้น offline cloud ที่ใช้กันภายใน ไม่ก็ share drive เวลาจะดูทีต้องโหลดลงมาก่อนเพื่ออ่าน
- จนตอนนี้เวลาเราจะupdate หรือ discuss อะไรก็ แค่เปิด note จากเครื่องตัวเองแล้วอ่านตามกันไปด้วย
