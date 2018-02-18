

<%@page import="javawebts.controladores.ComprasControlador"%>
<%@page import="javawebts.modelos.Proveedores"%>
<%@page import="javawebts.modelos.Compras"%>
<%@page import="javawebts.controladores.ClientesControlador"%>
<%@page import="javawebts.modelos.Clientes"%>
<%@page import="org.json.simple.JSONObject"%>

<%
    String numero_factura = "";
   int id_proveedor = Integer.parseInt(request.getParameter("id_proveedor")); 
    if (request.getParameter("numero_factura") != "") {
        numero_factura = request.getParameter("numero_factura");
    }

    String tipo = "error";
    String mensaje = "Datos no encontrados.";
    String nuevo = "true";

    Proveedores proveedor = new Proveedores();
    proveedor.setId_proveedor(id_proveedor);

    Compras compra = new Compras();
    compra.setNumero_factura(numero_factura);
    compra.setProveedor(proveedor);

    compra = ComprasControlador.buscarDuplicidad(numero_factura, id_proveedor);

    if (numero_factura != "") {

        tipo = "success";
        mensaje = "YA EXISTE ESTE NUMERO DE FACTURA";
        nuevo = "false";
    }
    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    obj.put("nuevo", nuevo);

    obj.put("numero_factura", compra.getNumero_factura());
    obj.put("id_proveedor", compra.getProveedor().getId_proveedor());

    out.print(obj);
    out.flush();
%>