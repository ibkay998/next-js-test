def findout(c):
    count = 0
    number = 0
    if c[0]==0:
        c.pop(0)
        
        for j,i in enumerate(c):
            try:
                if i==0:
                    count+=1
                    number+=1
                
                if i==1 and c[j-1]==0:
                    count+=1
                    number=0
                
                        
                if i == 1:
                    number=0

                if number == 2:
                    count-=1
                    number=0
               
                
            except IndexError:
                pass
        if c[-1]==1:
            count-=1
    return count ,c
        
print(findout([0,0,0,0,0,0,0]))