
<%@page import="javawebts.modelos.Permisos"%>
<%@page import="javawebts.controladores.PermisosControlador"%>
<%@page import="java.util.ArrayList"%>

<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%
    String orden_permiso=request.getParameter("bnombre_formulario");
    int pagina=Integer.parseInt(request.getParameter("bpagina"));
    Permisos permiso=new Permisos();
    permiso.setOrden_permiso(orden_permiso);
    String mensaje="Busqueda exitosa";
    String contenido=PermisosControlador.buscarOrdenPermiso(permiso,pagina);
    JSONObject obj=new JSONObject();
    obj.put("mensaje",mensaje);
    obj.put("contenido",contenido);
    out.print(obj);
    out.flush();
%>
