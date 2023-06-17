def reverse():
    cad = 'airotsiH,6.7,aícraG nómaR'
    cadena = cad[::-1]
    lisa = cadena.split(",")
    nombre = lisa[0]
    nota = lisa[1]
    materia = lisa[2]
    
    result = "{nombre} ha sacado un {nota} {materia}".format(nombre = nombre, nota=nota,  materia=materia)
    return result


if __name__ == '__main__':
    
    print(reverse())
    