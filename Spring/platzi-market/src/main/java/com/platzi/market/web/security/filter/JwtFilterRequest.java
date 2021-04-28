package com.platzi.market.web.security.filter;

import com.platzi.market.domain.service.PlatziUserDetailService;
import com.platzi.market.web.security.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * This class is going to execute each time that exist a request about the authorization and also share that functionality
 * to aur Component SecurityConfig
 */
@Component
public class JwtFilterRequest extends OncePerRequestFilter {

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private PlatziUserDetailService platziUserDetailService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authorizationHeader = request.getHeader("Authorization");

        /** Bearer is the suffix that identify a jwt token*/
        if(authorizationHeader != null && authorizationHeader.startsWith("Bearer")){

            /** we need to exclude the suffix "Bearer" */
            String jwt = authorizationHeader.substring(7);
            String username = jwtUtil.extractUsername(jwt);

            /** check that return a valid user and also that user has not had initialized session before*/
            if(username != null && SecurityContextHolder.getContext().getAuthentication()==null){
                UserDetails userDetails = platziUserDetailService.loadUserByUsername(username);

                /**
                 * Check if the jwt is right, then start a new session for this new user
                 * getAuthorities method allows us to get the user rolls that it has rights
                 * */
                if(jwtUtil.validateToken(jwt, userDetails)){
                    UsernamePasswordAuthenticationToken authToken =
                            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

                    /** in the token we are setting additional information about more details such us which browser the user is using,
                     * wich SO the user is using, what time the user log-in */
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                    SecurityContextHolder.getContext().setAuthentication(authToken);
                }
            }
        }
        /** evaluate the request and response with filter chain*/
        filterChain.doFilter(request, response);
    }
}
