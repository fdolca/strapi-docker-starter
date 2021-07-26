FROM strapi/base
WORKDIR /src/strapi-backend
ENV NODE_OPTIONS=--max-old-space-size=8192
ENV GENERATE_SOURCEMAP=false
RUN yarn create strapi-app backend --quickstart --no-run --template https://github.com/fdolca/strapi-base-template.git
COPY . .
CMD ["./start.sh"]
EXPOSE 1337