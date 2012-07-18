
 pea.l (mes,pc)
 dc.w $ff09        ; DOS _PRINT
 addq.l #4,sp
 dc.w $ff00        ; DOS _EXIT

mes: dc.b 'Hello, world!',0


