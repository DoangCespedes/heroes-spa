Se trabajo con dos router ya que la app tiene dos modulos el login y el home los cuales tienen diferentes maquetados y estructuras y de esta forma se podra trabajar mas comodo los dos modilos por separados con sus diferentes landingPage.

el uso del custom hook useNavigate es importante para la navegacion y en el se usa la propiedad replace que evita que el usuario pueda regresar al historial anterior.

-----------
El uso de useMemo es para memorizar valores: este hook nos sirve para no volver a disparar la funcion y volver a obtener los valores ya optenidos dentro de una carga de data.

NOTA:
El useMemo se diferencia del useCallback ya que el primero memoriza valores y el segundo memoriza funciones.
------------

PARA LA NAVEGACION FILTRADA POR SEARCH:
1.)Leer el componente SearchPage y comprender la logica que esta en el, comprender la navegacion por el useNavigate y el useLocation propios de react-router-dom

2.)Importamos el coustomHook useForm para trabajar mas facil la logica del input de texto

3.)Utilizamos el paquete query-string para que el mismo nos ayude a parsear la informacion que estamos obteniendo del location 