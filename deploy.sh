echo "
services:
  fede-work:
    image: ghcr.io/fede/fede:main
    networks:
      - traefik_traefik_network
    deploy:
      labels:
        - traefik.http.routers.fede-work.rule=Host(\`fede.work\`)
        - traefik.http.services.fede-work-service.loadbalancer.server.port=8080
      update_config:
        parallelism: 1
        delay: 10s
      restart_policy:
        condition: any

networks:
  traefik_traefik_network:
    external: true
" | docker stack deploy -c - fede_stack