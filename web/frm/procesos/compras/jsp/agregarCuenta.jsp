


<%@page import="javawebts.modelos.Cuentas"%>
<%@page import="javawebts.modelos.Cobros"%>
<%@page import="javawebts.modelos.Timbrados"%>
<%@page import="javawebts.modelos.Puestos"%>
<%@page import="javawebts.modelos.Establecimientos"%>
<%@page import="javawebts.modelos.TiposPagos"%>
<%@page import="javawebts.controladores.ComprasControlador"%>
<%@page import="javawebts.modelos.Compras"%>
<%@page import="javawebts.modelos.Clientes"%>
<%@page import="javawebts.controladores.ComprasControlador"%>
<%@page import="javawebts.modelos.Usuarios"%>
<%@page import="javawebts.utiles.Utiles"%>
<%@page import="javawebts.modelos.Compras"%>
<%@page import="javawebts.modelos.Proveedores"%>


<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%

  //  int id_cuenta = Integer.parseInt(request.getParameter("id_cuenta"));
    int id_compra = Integer.parseInt(request.getParameter("id_compra"));

    int id_tipopago = Integer.parseInt(request.getParameter("id_tipopago"));

    int total_compra = Integer.parseInt(request.getParameter("total_compra"));

    String tipo = "error";
    String mensaje = "Datos no agregados.";

    Compras compra = new Compras();
    compra.setId_compra(id_compra);
    TiposPagos pago = new TiposPagos();
    pago.setId_tipopago(id_tipopago);

    Cuentas cuenta = new Cuentas();
   // cuenta.setId_cuenta(id_cuenta);
    cuenta.setTotal_compra(total_compra);
    cuenta.setCompra(compra);
    cuenta.setPago(pago);

   ComprasControlador.modificarestadocompraCuenta(compra);
    if (ComprasControlador.agregarCuenta(cuenta)) {
        tipo = "success";
        mensaje = "Datos agregados.";
    }

    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);

    out.print(obj);
    out.flush();

%>