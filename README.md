## Requerimientos del programa:

En el problema presentado, la empresa de seguros llamado Tk-U necesita que automaticemos el proceso de realizar cotizaciones, mediante un **programa** donde el usuario coloca sus datos, y estos mismos *afectan al total de la cotización*, esta información que afecta el precio son:

1. **Edad**: Aqui el usuario coloca la edad que actualmente tiene, según el rango en el que se encuentre, se agrega un recargo.

2. **Verificación si esta casado o no**: el usuario deberá mencionar si está casado o no, según la edad del cónyuge, cómo a la edad, se manejan los mismos rangos y se hacen recargo.

3. **Hijos**: se verifica si el usuario cuenta con hijos, dependiendo la cantidad se hace un recargo por cada hijo/hija.

4. **Cuanto es su salario**: el usuario ingresa la cantidad que gana al mes, dependiend de la cantidad, se le hace un recargo del 5%

5. **Cuenta con propiedades**: preguntamos si el usuario cuenta con propiedades, de tener propiedades, ingresar la cantidad, dependiendo de la cantidad se le hace un recargo del 35% por cada una que cuente.

En el código a utilizar, se hará varias *definiciones de variables y constantes*, en este caso el primer constante que no cambia es el precio base, luego las variables vendrían siendo todas aquellas preguntas y 5 datos que el usuario ingresa, podemos usar un prompt para pedir dicha información, ya que no son datos que son aplicables para todos los usuarios, no todos tienen la misma edad, no todos tienen esposa/esposo, hijos, terrenos, y n finalmente no todos ganan l mismo salario, **es por eso que estos datos varían**. 

Según cada dato que vaya ingresando el usuario nosotros haremos la toma de decisiones, cuando si o cuando no aplicar dichos recargos, luego recopilamos dichos recargos, para que al final del programa, este haga la suma de los mismos, dando una cotización final al usuario.

