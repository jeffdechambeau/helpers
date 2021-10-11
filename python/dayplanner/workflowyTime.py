import time
import datetime
import calendar

startOn = datetime.datetime.today() - datetime.timedelta(days=0)
outputTo = 'output.txt'


def formatDate(date):
    return date.strftime("%B %-d")

def addTabs(text, n):
    return ''.join(["\t"] * n) + text


def tabAll(textlist, n):
    return list(map(lambda item: addTabs(item, n), textlist))


def calculateWeek(weekNo):
    global startOn
    first = startOn + datetime.timedelta(days=weekNo * 7)
    last = first + datetime.timedelta(days=6)
    return f"Week {weekNo + 1}: {formatDate(first)} – {formatDate(last)}"


def standardWeekChunk():
    placeholder = addTabs(" ", 1)
    standard = tabAll(['Tasks', placeholder, 'Days'], 2)
    weekdays = tabAll(list(calendar.day_name), 3)
    return standard + weekdays


def writeToFile(string, fname):
    f = open(fname, "w")
    f.write(string)
    f.close()
    print(f"Output written to {fname}")


def stringyify(textlist):
    return "".join(list(map(lambda x: x + "\n", textlist)))


def sketch90days(start, outputfile):
    weeks = list(map(calculateWeek, list(range(13))))
    chunk = standardWeekChunk()
    legs = ["Beginning", "Middle", "End"]

    output = []
    partIndex = 0

    for weekNo, text in enumerate(weeks):
        if weekNo in [0, 4, 9]:
            output.append(legs[partIndex])
            partIndex += 1
        output.append(addTabs(text, 1))
        output.extend(chunk)

    outputstring = stringyify(output)
    writeToFile(outputstring, outputfile)


sketch90days(startOn, outputTo)
