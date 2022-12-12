def dispense_fibonnaci(sequence_number):
    inicial1 = 0
    inicial2 = 1
    suma = 0
    contador = 4


    print(inicial1)
    print(inicial2)
    suma = inicial1 + inicial2
    print(suma)
    suma += suma 
    print(suma)
    while (contador <= sequence_number):    
        suma = suma + inicial2  
        inicial2 = suma - inicial2
        contador = contador + 1 
        print(suma)
    return 0

if __name__ == '__main__':
    
    dispense_fibonnaci(14)
    