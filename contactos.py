def solicitar_datos():
    contactos = []
    while True:
        nombre = input("Ingrese nombre: ")
        apellido = input("Ingrese apellido: ")
        dni = input("Ingrese DNI: ")
        
        telefonos = []
        while True:
            telefono = input("Ingrese un teléfono (o presione Enter para finalizar): ")
            if telefono:
                telefonos.append(telefono)
            else:
                break
        
        contactos.append([nombre, apellido, dni, telefonos])
        
        continuar = input("¿Desea ingresar otra persona? (si/no): ")
        if continuar.lower() != 'si':
            break
    
    print("\nLista de contactos:")
    for contacto in contactos:
        print(contacto)

solicitar_datos()