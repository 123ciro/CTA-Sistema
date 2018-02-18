

<%@page import="javawebts.controladores.ClientesControlador"%>
<%@page import="javawebts.modelos.Clientes"%>
<%@page import="org.json.simple.JSONObject"%>

<%
    int ruc_cliente = 0;

    if (request.getParameter("ruc_cliente") != "") {
        ruc_cliente = Integer.parseInt(request.getParameter("ruc_cliente"));

    }
    String tipo = "error";
    String mensaje = "Datos no encontrados.";
    String nuevo = "true";
    Clientes cliente = new Clientes();
    cliente.setRuc_cliente(ruc_cliente);

    cliente = ClientesControlador.buscarVerificador(ruc_cliente);
    if (ruc_cliente != 0) {
        tipo = "success";
        mensaje = "Datos encontrados";
        nuevo = "false";
    }
    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    obj.put("nuevo", nuevo);

    obj.put("dv_cliente", cliente.getDv_cliente());
    System.out.println("digito verificador " + cliente.getDv_cliente());
    obj.put("ruc_cliente", ruc_cliente);

    out.print(obj);
    out.flush();
%>