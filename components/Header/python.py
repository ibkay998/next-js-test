def minimumBribes(q):
    count =0
    answer=[]
    value=False

    data=max(q)
    if data == q[len(q)-1]:
        q.pop()
    try:
        while data != q[len(q)-1]:
            if max(q) == q[len(q)-1]:
                q.pop()
            else:
                datass=(len(q)-1)-q.index(max(q))
                if datass >2:
                    value = True
                count += datass
                datas=q.pop(q.index(max(q)))
                q.append(datas)
                q.pop()
    except IndexError:
        pass
    if value == True:
        return "Too chaotic"
    else:
        return count
    count =0
    value = False
   





    
    

print(minimumBribes(([ 1, 2, 5,3, 7, 8, 6, 4])))

