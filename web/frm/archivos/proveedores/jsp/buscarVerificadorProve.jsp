

<%@page import="javawebts.controladores.ProveedoresControlador"%>
<%@page import="javawebts.modelos.Proveedores"%>
<%@page import="org.json.simple.JSONObject"%>

<%
    int ruc_proveedor = 0;

    if (request.getParameter("ruc_proveedor") != "") {
        ruc_proveedor = Integer.parseInt(request.getParameter("ruc_proveedor"));

    }
    String tipo = "error";
    String mensaje = "Datos no encontrados.";
    String nuevo = "true";
    Proveedores proveedor = new Proveedores();
    proveedor.setRuc_proveedor(ruc_proveedor);

    proveedor = ProveedoresControlador.buscarVerificador(ruc_proveedor);
    if (ruc_proveedor != 0) {
        tipo = "success";
        mensaje = "Datos encontrados";
        nuevo = "false";
    }
    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    obj.put("nuevo", nuevo);

    obj.put("dv_proveedor", proveedor.getDv_proveedor());
    System.out.println("digito verificador " + proveedor.getDv_proveedor());
    obj.put("ruc_proveedor", ruc_proveedor);

    out.print(obj);
    out.flush();
%>