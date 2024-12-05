import time
import sys
text = "This is generated from ai, lorem ipsum blah blah blah"
lst = iter(list(text))
while True:
    try:
        print(next(lst),end="")
        sys.stdout.flush()
        time.sleep(0.1)
    except:
        break
print('done')