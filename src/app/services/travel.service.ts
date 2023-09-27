import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private infoAccomodation: any;

  private destinations = [
    {
      id: 1,
      name:"Barranquilla"
    },
    {
      id: 2,
      name:"San Andres"
    },
    {
      id: 3,
      name:"Bogotá"
    },
    {
      id: 4,
      name:"Cartagena"
    },
    {
      id: 5,
      name:"Cali"
    },
    {
      id: 6,
      name:"Santa Marta"
    }
  ];

  private accommodations = [
    
    {
      id:1,
      img: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/d7/47/0c7c80e64280b6e2c5eaad5545b0043377ec430d3907704f39cc56c4bbc5.jpeg',
      title: 'Hotel Dann Carlton Barranquilla',
      description: 'Este hotel sencillo con vista al mar Caribe se ubica a 6 km del Teatro Amira de la Rosa (donde se realizan conciertos) y a 5 km de las exhibiciones de arte del Museo Romántico.',
      price: "258328"
    },

    {
      id:2,
      img: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/5b/38/477953e05fcc168865e2b1a61a43242043fbca629ef3379b2f701e7895a9.jpeg',
      title: 'San Luis Place By Dorado',
      description: 'Este hotel dispone de espacios para fumadores.Te sentiras como en tu propia casa en cualquiera de las 20 habitaciones con aire acondicionado, minibar y televisión LCD. En tus ratos libres tendrás un televisor con canales por cable para entretenerte. El cuarto de bamo esta provisto de ducha.',
      price: "259999"
    },

    {
      id:3,
      img: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/18/5a/82f4ffffbe066ad19f6fbe418660d717cfc3d246913d7d8f1c9c3562fa1f.jpeg',
      title: 'Hotel Embassy Park',
      description: 'l Hotel Embassy Park es un hotel clásico con instalaciones modernas situado en Bogotá, cerca del centro Corferias y a unos 15 minutos en coche del aeropuerto El Dorado. El establecimiento ofrece un spa y un gimnasio bien equipado.',
      price: "262428"
    },
	{
      id:3,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/85/64/856488870.jpeg',
      title: 'Sofitel Bogota Victoria Regia',
      description: 'Diseñado para parecerse a un sofisticado hotel francés, Sofitel Bogotá Victoria Regia ofrece habitaciones y suites de alta gama ideales para una estancia de lujo en el distrito de La Cabrera de Bogotá.',
      price: "1273440"
    },

{
      id:7,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/16/50/1650377454.jpeg',
      title: 'Holiday Inn Express & Suites Medellin',
      description: 'Holiday Inn Express & Suites Medellín es un hotel informal en el distrito de El Poblado en Colombia, a solo tres kilómetros del Museo de Arte Moderno de Medellín.',
      price: "430000"
    },

{
      id:7,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/11/10/111081488.jpeg',
      title: 'The Charlee Lifestyle',
      description: 'Ubicado junto al parque Lleras en Medellín, The Charlee Lifestyle ofrece lujosas habitaciones con muebles balineses o malayos. Este hotel de lujo se enorgullece de su zona de spa con todos los servicios, piscina cubierta y gimnasio de última generación con jacuzzi.',
      price: "549247"
    },

{
      id:5,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//uploadimages/45/42/45420558.jpeg',
      title: 'Marriott Hotel',
      description: 'El Hotel Cali Marriott te invita al futuro de los viajes aquí en Colombia. Elegante, cómodo y con el telón de fondo del vibrante distrito de Granada de Cali, nuestro hotel ofrece un servicio intuitivo y una combinación innovadora de trabajo y diversión.',
      price: "1236824"
    },

{
      id:5,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/32/38/323878598.jpeg',
      title: 'InterContinental',
      description: 'El hotel InterContinental® Cali ofrece la mejor experiencia tanto para viajeros de negocios como de placer. Con espectaculares vistas al río Cali, el hotel ofrece también varios salones de reuniones, una terraza al aire libre con piscina y un relajante spa de servicio completo.',
      price: "394644"
    },

{
      id:4,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/52/68/526800530.jpeg',
      title: 'Hotel Sofitel Legend Santa Clara',
      description: 'Hotel Sofitel Legend Santa Clara Cartagena es un resort frente al mar ubicado en la Ciudad Amurallada de Cartagena en Bolívar, Colombia. Todas las habitaciones de estilo contemporáneo cuentan con conexión Wi-Fi gratuita y baño privado. También incluyen TV de pantalla plana, base para iPod Bose, caja fuerte y set de plancha.',
      price: "985240"
    },

{
      id:4,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//uploadimages/11/99/11992222.jpeg',
      title: 'Hotel Las Américas Casa de Playa',
      description: 'Ubicado en un lugar glorioso, sin nada entre el complejo y la amplia playa de arena, $hotelame es un encantador complejo de poca altura que ofrece alojamiento elegante y excelentes instalaciones de ocio adecuadas para toda la familia.',
      price: "581795"
    },

{
      id:6,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//uploadimages/46/53/46533686.jpeg',
      title: 'Estelar Santamar Hotel & Centro de Convenciones',
      description: 'Relájate y descansa con masajes, tratamientos corporales y tratamientos faciales. Seguramente apreciarás las instalaciones recreativas, que incluyen 3 piscinas al aire libre y un gimnasio. Las características adicionales de este hotel incluyen acceso inalámbrico a Internet de cortesía, servicios de conserjería.',
      price: "439398"
    },
{
	id:6,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/18/89/1889796176.jpeg',
      title: 'Santa Marta Marriott Resort Playa Dormida',
      description: 'Relájese en el spa de servicio completo, donde podrá disfrutar de masajes y tratamientos faciales. Puedes aprovechar las instalaciones recreativas, como un gimnasio y una piscina al aire libre. Las características adicionales de este hotel incluyen tiendas de regalos/quiosco, peluquería y sala de estar común.',
      price: "1041536"
    },

{
	id:6,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/16/58/1658863928.jpeg',
      title: 'Hotel La Finca Buritaca',
      description: 'Hotel La Finca Buritaca by DOT Premium es un hotel familiar ubicado en Buritaca, un paraíso de río y mar en Santa Marta. El hotel cuenta con restaurante, bar, piscina exterior, amplias zonas verdes, aparcamiento, servicio de habitaciones y masajes.',
      price: "341754"
    },

{
	id:6,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/18/86/1886832300.jpeg',
      title: 'Hilton Santa Marta',
      description: 'No se pierda las oportunidades recreativas que incluyen una piscina al aire libre y un gimnasio abierto las 24 horas. Las características adicionales de este hotel incluyen acceso inalámbrico a Internet de cortesía y servicios de conserjería. Disfrute de una comida en el restaurante o quédese y aproveche el servicio de habitaciones las 24 horas del hotel.',
      price: "569590"
    },

{
	id:6,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//uploadimages/22/06/22064280.jpeg',
      title: 'Hotel Boutique Don Pepe',
      description: 'Don Pepe, un hotel de lujo en Santa Marta, ofrece a todos sus huéspedes experiencias de viaje que combinan relax, historia y tradición en la ciudad más antigua de América.',
      price: "711987"
    },

{
	id:6,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/71/96/71968800.jpeg',
      title: 'Irotama Resort',
      description: 'Regálate una visita al spa, que ofrece masajes, tratamientos corporales y tratamientos faciales. Seguro que apreciarás las instalaciones recreativas, que incluyen 4 piscinas al aire libre, canchas de tenis al aire libre y gimnasio. Las características adicionales de este complejo incluyen acceso inalámbrico a Internet de cortesía, servicios de conserjería, y servicio de niñera (de pago).',
      price: "756741"
    },

{
	id:6,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/18/89/1889540716.jpeg',
      title: 'Casa de Leda',
      description: "Mímate con una visita al spa, que ofrece masajes y tratamientos faciales. Seguro que apreciarás las instalaciones recreativas, que incluyen una piscina al aire libre, una piscina cubierta y una sauna. Este hotel también cuenta con acceso inalámbrico a Internet de cortesía y servicios de conserjería.",
      price: "235973"
    },

{
	id:6,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/16/67/166771954.jpeg',
      title: 'Tamaca Hotel',
      description: 'Ubicado en una ubicación privilegiada de Santa Marta, Tamaca Beach Resort Hotel by Sercotel Hotels pone todo lo que la ciudad tiene para ofrecer a sus puertas.',
      price: "410918"
    },
{
	id:1,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/18/64/1864334776.jpeg',
      title: 'Holiday Inn Express',
      description: 'Holiday Inn Express® Barranquilla Buenavista Ubicado en el exclusivo barrio de Buenavista, el hotel Holiday Inn Express® Barranquilla Buenavista ofrece fácil acceso a tiendas y restaurantes, como Varadero, La Cueva y Cocina 33, donde podrá saborear la cocina tradicional de la región.',
      price: "333617"
    },

{
	id:1,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//uploadimages/51/21/51213278.jpeg',
      title: 'El Prado',
      description: 'No se pierda las oportunidades recreativas que incluyen una piscina al aire libre y un gimnasio. Las características adicionales de este hotel incluyen acceso inalámbrico a Internet de cortesía, servicios de conserjería y servicio de bodas.',
      price: "410000"
    },

{
	id:1,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/10/36/1036186282.jpeg',
      title: 'Crowne Plaza',
      description: 'Bienvenidos a Barranquilla - La Arenosa, una ciudad llena de progreso, alegría y gente cálida. Ubicado a 39 minutos del Aeropuerto Ernesto Cortissoz (BAQ), el Hotel Crowne Plaza, con sus bondades respaldadas por la marca internacional IHG Hotels, es la opción ideal para viajeros de negocios o turistas.',
      price: "386420"
    },

{
	id:1,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/49/47/494765830.jpeg',
      title: 'NH Collection Barranquilla Smartsuites Royal',
      description: 'El hotel NH Collection Barranquilla Smartsuites Royal es un elegante edificio de gran altura en el exclusivo distrito de Alto Prado. Los huéspedes pueden disfrutar de boutiques en el cercano centro comercial Villa Country o cenar en excelentes restaurantes situados a poca distancia. Los centros financieros y de negocios también están cerca.',
      price: "268407"
    },

{
	id:1,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/52/89/528953086.jpeg',
      title: 'Hilton Garden',
      description: 'Aproveche las oportunidades recreativas que incluyen una piscina al aire libre y un gimnasio abierto las 24 horas. Las características adicionales de este hotel incluyen acceso inalámbrico a Internet de cortesía y televisor en un área común. Disfrute de la cocina internacional en Garden Grille & Bar, un restaurante que cuenta con un bar o salón.',
      price: "244667"
    },

{
	id:1,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/17/55/1755303170.jpeg',
      title: 'Movich Buro 51',
      description: 'Regálate una visita al spa, que ofrece masajes, tratamientos corporales y tratamientos faciales. Si buscas oportunidades recreativas, encontrarás una piscina al aire libre, una sauna y un gimnasio abierto las 24 horas. Este hotel también cuenta con acceso inalámbrico a Internet de cortesía, servicios de conserjería y servicios de celebración de bodas.',
      price: "345822"
    },

{
	id:1,
      img: 'https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//uploadimages/31/28/31287784.jpeg',
      title: 'Country International Hotel',
      description: 'Country International Hotel es un alojamiento contemporáneo que ofrece elegantes habitaciones dobles y suites. Con una posición central en Barranquilla, el hotel está a 15 minutos a pie del Estadio Olímpico Romelio Martínez. Modernas y acogedoras, las habitaciones con baño del Country International Hotel están equipadas con secador de pelo, escritorio, minibar y TV de pantalla plana.',
      price: "298564"
    },

{
	id:2,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/18/89/1889539408.jpeg',
      title: 'Portobelo Beach',
      description: 'Disfrute de las vistas desde una terraza y aproveche servicios como conexión inalámbrica a Internet de cortesía y asistencia turística y para la compra de entradas. Puede disfrutar de una comida en Terraza Portobelo, que sirve a los huéspedes de Portobelo Beach, o pasar por el snack bar/deli.',
      price: "500425"
    },

{
	id:2,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/16/69/166911762.jpeg',
      title: 'Casa Harb Hotel',
      description: 'Mímate con los masajes que ofrece el hotel o disfruta de instalaciones recreativas como una piscina al aire libre. Las comodidades adicionales de este hotel incluyen acceso inalámbrico a Internet de cortesía y asistencia turística y para la compra de entradas. Disfrute de una comida en el restaurante o quédese y aproveche el servicio de habitaciones del hotel.',
      price: "773015"
    },
{
	id:2,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/17/64/1764638956.jpeg',
      title: 'Samawi',
      description: 'Disfrute de instalaciones recreativas como una piscina al aire libre o disfrute de la vista desde una terraza. Los servicios adicionales de este hotel incluyen acceso inalámbrico a Internet de cortesía y socorristas en el lugar. Disfrute de una comida en el Restaurante Cardamomo o quédese y aproveche el servicio de habitaciones del hotel (con horario limitado).',
      price: "834042"
    },
{
	id:2,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/17/08/1708147930.jpeg',
      title: 'Sea Avenue Hotel',
      description: 'Disfrute de las oportunidades recreativas como una piscina al aire libre o haga uso de otras comodidades que incluyen acceso inalámbrico a Internet de cortesía. En el Hotel Sea Avenue, disfrute de una deliciosa comida en el restaurante. Todos los días, de 7:30 a. m. a 9:30 a. m., se sirve un desayuno a la carta gratuito.',
      price: "521756"
    },
{
	id:2,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/16/61/1661677186.jpeg',
      title: 'Azure Lofts & Pool',
      description: "Aproveche las oportunidades recreativas, como una piscina al aire libre o disfrute de la vista desde la terraza y el jardín. Todos los días se sirve un desayuno continental gratuito de 7:30 a 9:30 horas. Tendrás periódicos gratuitos en el vestíbulo, secador de pelo a tu disposición servicios de limpieza/lavandería y recepción abierta las 24 horas. Hay aparcamiento sin asistencia gratuito disponible.",
      price: "389746"
    },
{
	id:2,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//uploadimages/51/44/51443752.jpeg',
      title: 'Ataraxy Hotel Boutique',
      description: 'Somos una nueva forma de hospitalidad contemporánea, con una combinación perfecta de arte, calidez hogareña y trato VIP. nuestros espacios están creados para brindar; tranquilidad, comodidad y buen servicio. Ataraxy Hotel Boutique se encuentra en San Andrés.',
      price: "145987"
    },
{
	id:2,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/71/52/71529258.jpeg',
      title: 'Hotel Arena Blanca',
      description: 'Con alojamiento estilo centro turístico todo incluido disponible, el Hotel Arena Blanca está idealmente situado cerca de una hermosa playa de arena blanca y cuenta con un relajante salón spa y una hermosa piscina.',
      price: "478892"
    },
{
	id:2,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/71/74/71744088.jpeg',
      title: 'Le Castel Blanc Boutique',
      description: 'Disfrute de las vistas desde el jardín y aproveche comodidades como acceso inalámbrico a Internet de cortesía. Disfrute de una comida en el restaurante o de refrigerios en la cafetería. El hotel también ofrece servicio de habitaciones. Reúnase con otros huéspedes en la recepción de cortesía que se realiza todos los días.',
      price: "260384"
    },
{
	id:3,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/17/54/1754117962.jpeg',
      title: 'Madison Inn Hotel & Luxury Suites ',
      description: 'El Madison Inn Hotel & Luxury Suites Bogotá está ubicado a poca distancia del distrito financiero y de entretenimiento, el Parque 93, y está rodeado de una gran variedad de tiendas y restaurantes. Cada una de las lujosas habitaciones ofrece televisión vía satélite con conexión Wi-Fi gratuita y camas king size.',
      price: "191219"
    },
{
	id:3,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/17/88/1788819154.jpeg',
      title: 'Fairfield by Marriott',
      description: 'Ubicado a 7 km del Aeropuerto Internacional El Dorado, TRYP Bogotá Hotel está a 0,2 km del Tribunal Administrativo de Cundinamarca y a menos de 5 kilómetros de la Universidad Nacional de Colombia y el Jardín Botánico de Bogotá.',
      price: "458755"
    },
{
	id:3,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/16/65/1665813958.jpeg',
      title: 'Hotel Embassy Park',
      description: 'Hotel Embassy Park es un hotel boutique de lujo con spa y cinco salas de reuniones. Se encuentra en las afueras de Bogotá, a sólo un kilómetro de Corferias, un importante centro de convenciones. Las habitaciones del hotel cuentan con minibar, caja de seguridad, mesa de trabajo, vestidor y televisión de pantalla plana.',
      price: "198758"
    },
{
	id:3,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//uploadimages/35/91/35916904.jpeg',
      title: 'Grand Hyatt',
      description: 'Hospédese en una ubicación estratégica, cerca de los principales puntos de interés de Bogotá, a 10 minutos del aeropuerto, 10 minutos del centro histórico y 2 minutos de la Embajada de Estados Unidos. Visita la ciudad descubriendo el barrio La Candelaria, el Museo del Oro, el Museo Botero, la plaza Bolívar y el Cerro Monserrate, luego,',
      price: "873244"
    },
{
	id:3,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//uploadimages/20/86/20867722.jpeg',
      title: 'Four Seasons Casa Medina Bogotá',
      description: 'Four Seasons Casa Medina Bogotá es un hotel de lujo ubicado en un histórico edificio colonial español en la Zona G de Bogotá, conocida por sus restaurantes, a solo 700 metros del centro comercial Avenida Chile.',
      price: "1125830"
    },
{
	id:3,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/65/61/656186192.jpeg',
      title: 'Sonesta',
      description: 'El Sonesta Hotel Bogotá ofrece alojamiento moderno con acceso gratuito a Internet Wi-Fi en el norte de Bogotá, Colombia, frente al Centro Comercial Unicentro',
      price: "599234"
    },
{
	id:4,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/12/19/1219130524.jpeg',
      title: 'Sofitel Baru Calablanca',
      description: 'Sofitel Barú Calablanca Beach Resort ofrece un alojamiento inolvidable en Barú, Cartagena. Las habitaciones con vistas al mar son amplias y confortables.',
      price: "779854"
    },
{
	id:4,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/16/94/1694175494.jpeg',
      title: 'Hyatt Regency',
      description: 'Hyatt Regency Cartagena cuenta con varios restaurantes, servicios de spa y una piscina. El hotel está situado en el distrito de Bocagrande de Cartagena, justo enfrente de la playa.',
      price: "668298"
    },
{
	id:4,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/16/84/1684889026.jpeg',
      title: 'Ghl Corales de Indias',
      description: 'Al otro lado de la calle del Mar Caribe, Ghl Corales de Indias es un elegante hotel que ofrece a los huéspedes Wi-Fi gratuito en las habitaciones y clases de cocina para niños.',
      price: "205723"
    },
{
	id:4,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/18/86/1886277580.jpeg',
      title: 'Casa Bugo',
      description: 'Casa BuGo boutique Hotel by BGH Casa Bugó Boutique Hotel by BGH Group - hotel boutique colonial en Cartagena de Indias, estratégicamente ubicado en el corazón del centro histórico, que lo invitará a descubrir el Caribe del siglo XVI desde la elegancia,',
      price: "325540"
    },
{
	id:4,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/17/57/1757075858.jpeg',
      title: 'Hotel Casa del Arzobispado',
      description: 'El Hotel Casa del Arzobispado presenta alojamiento boutique de lujo dentro de la histórica ciudad amurallada. Este elegante hotel de estilo colonial cuenta con un magnífico patio interior con una piscina al aire libre y una impresionante terraza en la azotea. Las habitaciones combinan a la perfección antigüedades del viejo mundo y comodidades modernas.',
      price: "902876"
    },
{
	id:4,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805//partnerimages/16/82/1682808432.jpeg',
      title: 'Casa Lola Luxury Collection',
      description: 'Casa Lola Luxury Collection es un hotel de lujo ubicado en un par de edificios restaurados, uno de ellos del siglo XVII, en el área de Getsemaní de Cartagena de Indias. Las habitaciones están decoradas de forma individual y cuentan con TV de pantalla plana por cable, aire acondicionado y minibar.',
      price: "589920"
    },
{
	id:5,
      img: 'https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//uploadimages/34/58/34582474.jpeg',
      title: 'Hotel Torre de Cali Plaza',
      description: 'El Hotel Torre de Cali Plaza, en el barrio de Versalles de la capital del Valle del Cauca, destaca por ser uno de los edificios más altos del país. Las habitaciones cuentan con baño privado con amenities y secador de cabello. ',
      price: "242403"
    },
{
	id:5,
      img: 'https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/18/64/1864432524.jpeg',
      title: 'Apartasuites San Marcos',
      description: 'Con una piscina al aire libre y un amplio solárium con vistas panorámicas, el Apartasuites San Marcos ofrece alojamiento independiente con conexión Wi-Fi gratuita e ilimitada en Cali.',
      price: "91650"
    },
{
	id:5,
      img: 'https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/33/75/337547416.jpeg',
      title: 'Hotel MS Chipichape',
      description: 'MS Chipichape es elegante, cómodo y situado en el vibrante barrio de Granada de Cali, ofrece un servicio intuitivo y una mezcla innovadora de trabajo y diversión. Cada una de sus 170 habitaciones están equipadas de manera impecable;',
      price: "207298"
    },
{
	id:5,
      img: 'https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/33/75/337547382.jpeg',
      title: 'Sonesta Hotel Cali',
      description: 'Four Points By Sheraton Cali es un hotel de 4 estrellas ubicado en Santiago de Cali, Capital Mundial de la Salsa, en el entorno de la Zona Rosa y Gastronómica de ciudad, a 10 minutos de las zonas industriales de Arroyohondo y Yumbo, a 20 minutos del Centro de Eventos Valle del Pacifico.',
      price: "317573"
    },
{
	id:5,
      img: 'https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/69/40/69400190.jpeg',
      title: 'Hotel Spiwak Chipichape',
      description: 'Emplazado en la zona de La Campina de Cali, en Colombia, se encuentra el Hotel Spiwak Chipichape. Este hotel de 5 estrellas es miembro de la cadena hotelera de lujo Preferred Hotels & Resort. ',
      price: "457554"
    },
{
	id:5,
      img: 'https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/16/36/1636796486.jpeg',
      title: 'Cosmos Cali',
      description: 'El Hotel Cosmos Cali se encuentra a solo 15 calles del centro comercial Chipichape y ofrece habitaciones elegantes con conexión WiFi gratuita. Alberga un vestíbulo amplio; se facilita aparcamiento privado gratuito y podrán encontrar en la recepción una pequeña estación de productos comestibles.',
      price: "195239"
    },
{
	id:7,
      img: 'https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/47/83/478323308.jpeg',
      title: 'Estelar Milla De Oro',
      description: 'Con servicios como masajes, tratamientos corporales o tratamientos faciales, te sentirás como nuevo. Aprovecha las instalaciones recreativas, que incluyen un centro de bienestar, una bañera de hidromasaje y una sauna. ',
      price: "446548"
    },
{
	id:7,
      img: 'https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//uploadimages/31/11/31115662.jpeg',
      title: 'Hotel Dann Carlton Medellín',
      description: 'El Hotel Dann Carlton Medellín se encuentra ubicado en la zona de El Poblado, en Medellín. Se caracteriza por sus jardines paisajísticos y su terraza en la azotea. Las estancias cuentan con televisor de pantalla plana con canales nacionales e internacionales, aire acondicionado, caja de seguridad y minibar. ',
      price: "562298"
    },
{
	id:7,
      img: 'https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/16/53/1653828582.jpeg',
      title: 'Hotel San Fernando Plaza',
      description: 'Situado en el distrito financiero, el lujoso alojamiento de 5 estrellas Hotel San Fernando Plaza es ideal para viajes de negocios. Sus elegantes habitaciones disponen de zona de estar, televisor, caja fuerte, aire acondicionado, minibar y baño completo con amenities.',
      price: "473620"
    },
{
	id:7,
      img: 'https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/16/87/1687580608.jpeg',
      title: 'Blues Suites Medellin',
      description: 'Descubre por qué tantos viajeros ven a Blues Suites como el hotel ideal cuando visitan Medellín. Además de aportar la combinación ideal de calidad, comodidad y ubicación, ofrecemos un ambiente para viajeros con una amplia variedad de servicios a precios fantásticos. Las',
      price: "450800"
    },
{
	id:7,
      img: 'https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/16/78/1678647280.jpeg',
      title: 'Porton Medellin',
      description: 'El Hotel Portón Medellín posee unos ambientes cálidos y tranquilos que brindan confort a todos sus visitantes. ',
      price: "441000"
    },
{
	id:7,
      img: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/15/56/1556004514.jpeg',
      title: 'Viaggio Medellin',
      description: 'Disfrute de un alojamiento exclusivo durante su estancia en Medellín. El hotel Viaggio Medellín ha sido diseñado para clientes que buscan la perfección. Con una excelente ubicación sobre la Avenida El Poblado, te invitamos a tomarte un descanso con todos los servicios e instalaciones que necesitas.',
      price: "460735"
    }
	
  ];

  constructor() { }

  getAccommodations(id:number) {
    return  this.accommodations.filter(a=>{ return a.id === id });
  }

  getDestinations() {
    return this.destinations;
  }

  setInfoAccommodation(data: any) {
    this.infoAccomodation = data;
  }

  getInfoAccommodation() {
    return this.infoAccomodation;
  }

}
