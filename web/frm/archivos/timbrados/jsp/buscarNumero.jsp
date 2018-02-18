<%@page import="javawebts.controladores.TimbradosControlador"%>
<%@page import="org.json.simple.JSONObject"%>

<%
    String numero_timbrado = request.getParameter("bnumero_timbrado");
    int pagina = Integer.parseInt(request.getParameter("bpagina"));
    
    String mensaje = "Búsqueda exitosa.";
    String contenido =TimbradosControlador.buscarNumero(numero_timbrado, pagina );
    
    JSONObject obj = new JSONObject();
    obj.put("mensaje",mensaje);
    obj.put("contenido", contenido);
      System.out.println("--->" + contenido);
    out.println(obj);
    out.flush();
%>