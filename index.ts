// Import stylesheets
import './style.css';

// ...So now lets... write TypeScript code!!!

interface InvoiceHeader {
  ref_number: string;
}

interface invoice {
  id_cliente: string;
  id_empresa: string;
  vencimiento: string;
  invoice_header?: InvoiceHeader;
}

interface payment {
  payment_date: string;
  card: Card;
}

interface Card {
  card_nuber: string;
  due_date: string;
}

let firstCard: Card = { card_nuber: '895375094530', due_date: '2029/01/02' };
let firstPayment: payment = { payment_date: '2023/12/05', card: firstCard };

let vencFmt_: string = '';

if (!!firstPayment?.card?.due_date) {
  const vencCard: string = String(firstPayment?.card?.due_date);
  vencFmt_ = vencCard.replace(/[/]/g, '');
}

console.log(`Vencimiento tarjeta: ${vencFmt_}`);

let firstInvoice: invoice = {
  id_cliente: '36968360',
  id_empresa: 'UNCF',
  vencimiento: '06/27/2024',
  invoice_header: {
    ref_number: '53453434543-07',
  },
};

const {
  id_cliente,
  id_empresa,
  vencimiento,
  invoice_header: { ref_number },
} = firstInvoice;

let vencFmt: string = '';

if (!!vencimiento) {
  const venc: string = String(firstInvoice['vencimiento']);
  vencFmt = venc.replaceAll(/[/]/g, '/');
}

console.log(`Vencimiento: ${vencFmt}, reference number: ${ref_number}`);

// ###################################################

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1><p>TypeScript Playground</p></h1>`;

interface Person {
  name: string;
  id: number;
  phone: number;
  hasAccess: boolean;
}

const showPersonName = (somebody: Person) => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (!!somebody.name) {
        resolve(somebody.name);
      } else {
        reject(`Please enter your name`);
      }
    }, 3000);
  });
};

const display = async (firstName?: string) => {
  const someGuy: Person = {
    name: firstName ?? 'Bobby',
    id: 1,
    phone: 1230987,
    hasAccess: false,
  };
  try {
    const result = await showPersonName(someGuy);
    console.log(`Hello ${result}!!`);
  } catch (err) {
    console.log(err);
  }
};

display('Peter');

// ###################################################

interface RickAndMorty {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin?: Origin;
  location?: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

let ricksAndMortys: Array<RickAndMorty> = [
  {
    id: '19',
    name: 'Antenna Rick',
    status: 'unknown',
    species: 'Human',
    type: 'Human with antennae',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'unknown',
      url: '',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/10'],
    url: 'https://rickandmortyapi.com/api/character/19',
    created: '2017-11-04T22:28:13.756Z',
  },
  {
    id: '38',
    name: 'Beth Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/38.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
      'https://rickandmortyapi.com/api/episode/3',
      'https://rickandmortyapi.com/api/episode/4',
      'https://rickandmortyapi.com/api/episode/5',
      'https://rickandmortyapi.com/api/episode/6',
      'https://rickandmortyapi.com/api/episode/22',
      'https://rickandmortyapi.com/api/episode/51',
    ],
    url: 'https://rickandmortyapi.com/api/character/38',
    created: '2017-11-05T09:48:44.230Z',
  },
  {
    id: '47',
    name: 'Birdperson',
    status: 'Alive',
    species: 'Alien',
    type: 'Bird-Person',
    gender: 'Male',
    origin: {
      name: 'Bird World',
      url: 'https://rickandmortyapi.com/api/location/15',
    },
    location: {
      name: 'Planet Squanch',
      url: 'https://rickandmortyapi.com/api/location/35',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/47.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/11',
      'https://rickandmortyapi.com/api/episode/16',
      'https://rickandmortyapi.com/api/episode/21',
      'https://rickandmortyapi.com/api/episode/22',
      'https://rickandmortyapi.com/api/episode/26',
      'https://rickandmortyapi.com/api/episode/49',
      'https://rickandmortyapi.com/api/episode/51',
    ],
    url: 'https://rickandmortyapi.com/api/character/47',
    created: '2017-11-05T11:13:36.018Z',
  },
  {
    id: '240',
    name: 'Mr. Goldenfold',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/240.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/9',
      'https://rickandmortyapi.com/api/episode/16',
      'https://rickandmortyapi.com/api/episode/17',
      'https://rickandmortyapi.com/api/episode/18',
      'https://rickandmortyapi.com/api/episode/21',
      'https://rickandmortyapi.com/api/episode/22',
      'https://rickandmortyapi.com/api/episode/24',
      'https://rickandmortyapi.com/api/episode/27',
      'https://rickandmortyapi.com/api/episode/30',
      'https://rickandmortyapi.com/api/episode/39',
    ],
    url: 'https://rickandmortyapi.com/api/character/240',
    created: '2017-12-30T17:42:56.349Z',
  },
  {
    id: '328',
    name: 'Slow Rick',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/328.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/28'],
    url: 'https://rickandmortyapi.com/api/character/328',
    created: '2018-01-10T16:14:16.331Z',
  },
  {
    id: '407',
    name: 'Regular Tyrion Lannister',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Interdimensional Cable',
      url: 'https://rickandmortyapi.com/api/location/6',
    },
    location: {
      name: 'Interdimensional Cable',
      url: 'https://rickandmortyapi.com/api/location/6',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/407.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/8'],
    url: 'https://rickandmortyapi.com/api/character/407',
    created: '2018-04-15T20:50:10.475Z',
  },
];

const rick2Search: string = '19';

const searchRick = (searchId: string) => {
  let rickFound = ricksAndMortys.find((rick) => {
    return rick.id === searchId;
  });
  return rickFound;
};
const found = searchRick(rick2Search);
console.log(found);

// ###################################################

type User = {
  id: string;
  name: string;
};

type Employee = User & {
  email: string;
};

const people: (User | Employee)[] = [
  { id: '1', name: 'Hector' },
  { id: '2', name: 'Achilles' },
  { id: '3', name: 'Priamo', email: 'priam@test.com' },
  { id: '4', name: 'Peleus', email: 'peleus@test.com' },
];

const isEmployee = (person: User | Employee): person is Employee => {
  return 'email' in person;
};

people.forEach((person) => {
  isEmployee(person)
    ? console.log(`My employee email is ${person.email}`)
    : console.log(`I am just a person named ${person.name}`);
});

// #####################################################

const colors = ['text-yellow-500', 'text-violet-500', 'text-blue-500'] as const;
type ExtractColor<S extends string> = S extends `text-${infer R}-500` ? R : S;
type Example = ExtractColor<(typeof colors)[number]>;

const findColor = (color: ExtractColor<(typeof colors)[number]>) => {
  return colors.find((c) => c.includes(color));
};

findColor('blue');

type language = `Java` | `Python` | `JavaScript` | `C#`;
type country = `us` | `gb` | `de`;
type fullCode = `${language}-${country}`;

const code: fullCode = `JavaScript-gb`;
console.log(`Code: ${code}`);

// #####################################################

interface ingredients {
  vegetables: string;
  meats: string;
  toppings: string[];
}

type Choice = { item: string };

const fastFoodOrder = (preference?: Choice) => {
  interface GreatSandwich {
    msg: string;
    sandwich: string[];
  }
  const response: string = 'Your hamburger is ready!';
  return new Promise((resolve, reject) => {
    const menu: ingredients = {
      meats: 'beef patties',
      vegetables: 'lettuce',
      toppings: ['mustard', 'ketchup', 'vegan mayo'],
    };

    setTimeout(() => {
      if (!!preference) {
        const weHave = menu.toppings.includes(preference.item);
        if (weHave) {
          let fullSandwich: GreatSandwich = {
            msg: 'Your hamburger is ready!',
            sandwich: ['cucumber', 'radish', 'cheese', 'bacon', 'lettuce'],
          };
          resolve(fullSandwich);
        } else {
          reject('No such ingredient.');
        }
      } else {
        reject(new Error("Sorry, you haven't tell us what you desire yet."));
      }
    }, 5000);
  });
};

const go2FastFood = async (choice: Choice) => {
  try {
    const res = await fastFoodOrder(choice);
    console.log(res);
  } catch {
    console.log('No order');
  }
};
const choice: Choice = { item: 'vegan mayo' };
go2FastFood(choice);

// example of type alias vs interface
type TUserProps = { name: string; age: number };
interface IUserProps {
  name: string;
  age: number;
}

// intersection
type AdminProps = TUserProps & { role: string };

let admin: AdminProps = { name: 'Achilles', age: 32, role: 'admin' };

// interface can only describe an object - type alias
// can also describe object AND everything else (e.g. primitive values such as string, number, boolean)
type Address = string;
const address: Address = '123 Main St.';

// type alias can also describe union types - interface cannot
type AddressStr = string | string[];
const addresStr_s: AddressStr = ['123 Main St.', '3456 St Paul St.'];
const addresStr_c: AddressStr = '7890 New St.';

// type alias can easily use utility types - interface can too but only with ugly syntax
type UserProps = { name: string; age: number; createdAt: Date };

type GuestProps = Omit<UserProps, 'name' | 'age'>;
const guest_owner: GuestProps = { createdAt: new Date() };
console.log(guest_owner);

// type alias can easily describe tuples - interface can too but only with ugly syntax
type AddressTuple = [number, string];
const addressTuple: AddressTuple = [1, 'Other St.'];

// extracting type from something else
const project1 = {
  title: 'Project 1',
  specification: {
    areaSize: 100,
    rooms: 3,
  },
} as const;

type Specification = (typeof project1)['specification'];

const project2 = {
  title: 'Project 2',
  specification: {
    areaSize: 250,
    rooms: 5,
  },
};

type Project2 = typeof project2;
let project_2: Project2 = {
  title: 'Project 2 Plus',
  specification: { areaSize: 50, rooms: 2 },
};

// interfaces can be merged
// "interfaces are open" and "type aliases are closed."
type User1 = { name: string; age: number };
type User2 = User & { role: string };

// Array method with()
const origMessages = [];
origMessages.push('Hello');
origMessages.push('Hi');
origMessages.push('My name is Ron');
origMessages.push('My name is Harold');
console.log(origMessages[2]);

origMessages[2] = 'My name is Rob';
console.log(origMessages.at(2));

// const messages = origMessages.with()
const collectMsgs = () => {
  const allMsgs = [...origMessages];
  console.log(allMsgs);
};
collectMsgs();

const pay = {
  invoice: {
    invoice_id: '35345',
    company_id: '675675',
    company_name: 'sarasa',
    company_cuit: '4235346789787653',
    category_id: '123',
    category_name: 'cat',
    customer_id: '758',
    amount: 0,
    currency: 'usd',
    screen_description: 'asdda',
    title_identification: 'adfaf',
  },
  payment: {
    amount: 0,
    currency: 'usd',
    hostOnLine: true,
    card: {
      payment_method_id: '435',
      card_number: '34556432',
      installments: 'no',
    },
    account: {
      type: 'e',
      number: '356788543',
      currency: 'dollars',
    },
    payment_date: '2024-01-12T01:48:01.381Z',
    payment_caption: 're',
    transaction_number: '44577',
    control_number: '08877',
    autorization_code: '12234',
    adhesion_caption: 'gt',
  },
};

const {
  payment: {
    amount,
    currency: payment_currency,
    hostOnLine,
    payment_date,
    payment_caption,
    transaction_number,
    control_number,
    autorization_code,
    adhesion_caption,
    account: { currency: account_currency, number, type },
    card: { card_number, installments, payment_method_id },
  },
  invoice: {
    invoice_id,
    company_id,
    company_name,
    company_cuit,
    category_id,
    category_name,
    customer_id,
    amount: invoice_amount,
    currency: invoice_currency,
    screen_description,
    title_identification,
  },
} = pay;

console.log(
  `payment account: type, number, currency: ${type}, ${number}, ${account_currency}`
);

const buildPayResponse = () => {
  if (!type && !number && !account_currency) {
    return {
      invoice: {
        invoice_id,
        company_id,
        company_name,
        company_cuit,
        category_id,
        category_name,
        customer_id,
        invoice_amount,
        invoice_currency,
        screen_description,
        title_identification,
      },
      payment: {
        amount,
        payment_currency,
        hostOnLine,
        payment_date,
        payment_caption,
        transaction_number,
        control_number,
        autorization_code,
        adhesion_caption,
        card: { payment_method_id, installments, card_number },
      },
    };
  } else {
    return {
      invoice: {
        invoice_id,
        company_id,
        company_name,
        company_cuit,
        category_id,
        category_name,
        customer_id,
        invoice_amount,
        invoice_currency,
        screen_description,
        title_identification,
      },
      payment: {
        amount,
        payment_currency,
        hostOnLine,
        payment_date,
        payment_caption,
        transaction_number,
        control_number,
        autorization_code,
        adhesion_caption,
        card: { payment_method_id, installments, card_number },
        account: { type, number, account_currency },
      },
    };
  }
};
const paymentResp = buildPayResponse();
console.log('payment response: ', paymentResp);

const buildPayResponseShortened =
  pay.payment.account.currency &&
  pay.payment.account.number &&
  pay.payment.account.type &&
  buildPayResponse();
console.log('build pay response shortened: ', buildPayResponseShortened);

const foobar = {
  name: 'Microsoft',
  sector: 'Development',
  address: {
    state: 'Karnataka',
    city: 'Bangalore',
    country: undefined,
  },
};

try {
  const country = JSON.parse(foobar.address.country);
  console.log(`Country: ${country}`);
} catch (err) {
  console.log('Not a valid data to parse', err.message);
}

// ##################################################
const card_no: string = '77038199454526110';
console.log(card_no.slice(-4));

// ##################################################

const cardIdMapper = {
  //Mastercard
  m: 'Master',
  //Amex
  a: 'American Express',
  //Visa
  v: 'Visa',
};

const buildMaskedCardNumber = (card_no: string, card_type: string): string => {
  return `${cardIdMapper[card_type]}-${card_no
    .slice(-4)
    .padStart(card_no.length, 'X')}`;
};
const card = buildMaskedCardNumber('0647352627', 'v');
console.log(`Masked Card: ${card}`);

const mesesDelAño = {
  1: 'Enero',
  2: 'Febrero',
  3: 'Marzo',
  4: 'Abril',
  5: 'Mayo',
  6: 'Junio',
  7: 'Julio',
  8: 'Agosto',
  9: 'Septiembre',
  10: 'Octubre',
  11: 'Noviembre',
  12: 'Diciembre',
};

const obtenerNombreDelMes = (mesNumero: number) => {
  if ('5' in mesesDelAño) {
    console.log('está Mayo');
  }
  return (mesesDelAño[mesNumero] ??= 'Mes Desconocido');
};
console.log(obtenerNombreDelMes(5));

const buildResponse = (sector_name: string) => {
  return {
    ...{
      name: 'Microsoft',
      sector_name,
      address: {
        state: 'Karnataka',
        city: 'Bangalore',
        country: 'India',
      },
    },
  };
};
console.log(buildResponse('Testing'));

// Require optional properties
type UserAdmin = {
  id: string;
  name?: string;
  email: string;
  phoneNumber?: string;
};
const user: UserAdmin = {
  id: Math.floor(Math.random()).toString(),
  email: 'foo@example.com',
};

type Required<T> = { [P in keyof T]-?: T[P] };
type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
/* const userWithError: WithRequired<UserAdmin, 'name'> = {
  id: Math.floor(Math.random()).toString(),
  email: 'foo@example.com',
}; */ // will throw an error
const userWithoutError: WithRequired<UserAdmin, 'name'> = {
  id: Math.floor(Math.random()).toString(),
  email: 'foo@example.com',
  name: 'John Smith',
}; // will throw an error
console.log('user without error: ', userWithoutError);

// Calcular cuantas silabas tiene una palabra
const silabas = (palabra: string) => {
  const vocales: string = 'aeiou';
  const silabas: number = palabra
    .split('')
    .filter((char) => vocales.includes(char)).length;
  console.log(`"${palabra}" tiene ${silabas} silabas.`);
};
silabas('paralelepipedo');

// Agrupar los numeros pares e impares de una cifra.
const justEven = (cifra: string) => {
  const evens = cifra.split('').filter((n) => {
    const num: number = Number(n);
    return num % 2 === 0;
  });
  const odds = cifra.split('').filter((n) => {
    const num: number = Number(n);
    return num % 2 !== 0;
  });
  return [...evens, ...odds];
};
const evensAndOdds = justEven('098325093575308324954824');
console.log(`Evens & Odds: ${evensAndOdds}`);

// Extraer numeros pares de dentro de la cifra y mostrarlos en orden inverso
const codigo: string = '097354-0932745056-2309534509872345098732';

console.log(codigo.match(/\-[^-]+\-/g));

// Optional
type Recipe = {
  id: string;
  title: string;
  description: string;
  ingredients: Ingredient[];
  createdAt: Date;
  images: string[];
};

type Ingredient = {
  name: string;
  quantity: number;
  unit: string;
};

const pizza: Recipe = {
  id: '01',
  title: 'Pizza',
  description: 'Margherita Pizza',
  ingredients: [{ name: 'pizza dough', quantity: 1, unit: '1' }],
  createdAt: new Date(),
  images: ['url1', 'url2'],
};

const pasta: Recipe = {
  id: '02',
  title: 'Spaghetti',
  description: 'Spaghetti alla Putanesca',
  ingredients: [{ name: 'spaghetti', quantity: 1, unit: '1' }],
  createdAt: new Date(),
  images: ['url3', 'url4'],
};

const recipes: Recipe[] = [pizza, pasta];

const updateRecipe = (recipe: Partial<Recipe>) => {
  const updRecipe: Partial<Recipe> = {
    ...recipe,
    ingredients: [
      ...recipe.ingredients,
      { name: 'mushrooms', quantity: 5, unit: '1' },
      { name: 'mozzarella', quantity: 1, unit: '1' },
      { name: 'thyme', quantity: 2, unit: '2' },
      { name: 'evo', quantity: 2, unit: '2' },
      { name: 'salt', quantity: 1, unit: '2' },
      { name: 'pepper', quantity: 1, unit: '2' },
    ],
  };
  return updRecipe;
};
const updPizza = updateRecipe(pizza);
console.log('Pizza updated: ', updPizza);

// Better error handling with unknown type
class MyError extends Error {
  constructor(message: string) {
    super(message);
  }
}

const hasErrorMessage = (error: unknown): error is { message: string } => {
  if (!!error && typeof error === 'object' && 'message' in error) {
    return true;
  }
  return false;
};

const failing = () => {
  throw new MyError('This is an error!');
};

try {
  failing();
} catch (error: unknown) {
  if (typeof error === 'object' && 'message' in error) {
    console.log('O', error.message);
  } else if (error instanceof Error) {
    console.log('A', error.message);
  } else if (error instanceof MyError) {
    console.log('B', error.message);
  } else if (typeof error === 'string') {
    console.log('C', error);
  } else if (hasErrorMessage(error)) {
    console.log(error.message);
  }
}

const rickMortys: string[] = ['19', '267', '103', '825', '30'];
const validateRickMortyId = (rickMortys) => {
  rickMortys.some((rmId: any) => {
    let rm: number = Number(rmId);
    if (rm < 1 || rm > 826) {
      throw new TypeError('Invalid RickAndMorty ID');
    } else {
      console.log(rm);
    }
  });
};
validateRickMortyId(rickMortys);

// Exhaustive Switch: Discriminated unions
type QueryOptionsOLD = {
  table: 'users' | 'widgets' | 'sessions';
  userId?: string;
  widgetId?: string;
  sessionId?: string;
  limit: number;
  offset: number;
};

type QueryOptions = {
  limit: number;
  offset: number;
} & (
  | {
      table: 'users';
      userId: string;
    }
  | {
      table: 'widgets';
      widgetId: string;
    }
  | {
      table: 'sessions';
      sessionId: string;
    }
  | {
      table: 'sales';
      salesId: string;
    }
);

const query = (options: QueryOptions): string => {
  let id = '';

  switch (options.table) {
    case 'users':
      id = options.userId;
      break;
    case 'widgets':
      id = options.widgetId;
      break;
    case 'sessions':
      id = options.sessionId;
      break;
    case 'sales':
      id = options.salesId;
      break;
    default:
      assertCannotReach(options);
  }

  return id;
};

const assertCannotReach = (x: never) => {
  throw new Error('cannot reach this place in the code');
};

// Branded types
type EmailAddress = string & { __brand: 'EmailAddress' };

const isEmailAddress = (email: string): email is EmailAddress => {
  return email.includes('@gmail.com');
};

function assertEmailAddress(email: string): asserts email is EmailAddress {
  if (!email.includes('@gmail.com')) {
    throw new Error(`InvalidArgument: {${email}} is not an email address`);
  }
}

const sendWelcomeEmail = (e: EmailAddress) => {
  console.log('Sending email ok');
};

const signUp = (email: string) => {
  assertEmailAddress(email);

  sendWelcomeEmail(email);
};

// Error builder
type ApiError = {
  codigo: string;
  document_number: string;
  nickname: string;
  mensaje: string;
  document_type: string;
  favoritePizza: {
    pizza_name: string;
    pizza_toppings: string[];
    pizza_size: string;
  };
};

type CustomError = {
  type: string;
  httpType: string;
  apiError: ApiError;
  statusText: string;
};

const buildBodyError = (customError: CustomError) => {
  const { type, httpType, apiError, statusText } = customError;
  const {
    codigo,
    document_number,
    document_type,
    mensaje,
    nickname,
    favoritePizza: { pizza_name, pizza_toppings, pizza_size },
  } = apiError;
  let errorExceptionBody = { type, status: httpType };

  errorExceptionBody = Object.assign(errorExceptionBody, {
    ...{
      type: type,
      status: httpType,
      code: codigo,
      document_number,
      document_type,
      statusText,
      mensaje,
      nickname,
      instance: '/v1/users',
      pizza_name,
      pizza_toppings,
      pizza_size,
    },
  });
  return errorExceptionBody;
};

const apiError: ApiError = {
    codigo: 'B20',
    document_number: '50143001',
    nickname: '',
    mensaje:
      'Para comenzar a operar, debe generar cambio de clave, clave vencida.',
    document_type: 'DNI',
    favoritePizza: {
      pizza_name: 'Margherita',
      pizza_toppings: ['tomato sauce', 'mozzarella', 'olives'],
      pizza_size: 'large',
    },
  },
  customError: CustomError = {
    type: 'API-MIDDLEWARE',
    httpType: '400',
    apiError,
    statusText: 'Bad Request',
  };

console.log(buildBodyError(customError));

// Build response object
const urlError: string = 'http://regexr.com/';

const buildResp = () => {
  return {
    api: 'Main App',
    date: '20240301',
    urlError,
  };
};

console.log(buildResp());

// Filtrar un objeto que tenga una propiedad especifica que cumpla con un criterio determinado.
// Filtrar un objeto que tenga una propiedad especifica que cumpla con un criterio determinado.
let personas = [
  { nombre: 'Juan', edad: 17 },
  { nombre: 'Maria', edad: 25 },
  { nombre: 'Pedro', edad: 20 },
  { nombre: 'Ana', edad: 10 },
];
let edadMinima = 10;

const filtrarEdad = (arreglo, edadMinima) =>
  arreglo.filter((p) => p.edad > edadMinima);

console.log('Filtrar edad: ', filtrarEdad(personas, edadMinima));

// Validar propiedad edad
const filtrarValidarEdad = (arreglo, edadMinima) => {
  let objetosFiltrados = [];
  for (const p of arreglo) {
    if ('edad' in p) {
      if (p.edad > edadMinima) {
        objetosFiltrados.push(p);
      }
    }
  }
  return objetosFiltrados;
};
console.log(filtrarValidarEdad(personas, edadMinima));

// Hace de forma aleatoria un numero entre 1 y 10, y verfica si ese numero es par o impar
const verificarNum = () => {
  return Math.floor(Math.random() * 10) + (1 % 2) === 0
    ? `es un numero par.`
    : `es un numero impar.`;
};

console.log(verificarNum());

// Romper la tripa del camello, utilizando un espacio entre las palabras.
const romperTripa = (cadena) => {
  let resultado = '';

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === cadena[i].toUpperCase() && i > 0) {
      resultado += ' ';
    }
    resultado += cadena[i];
  }
  return resultado;
};
console.log(romperTripa('paginaWeb'));

const isArrayOfStrings = (value: unknown) => {
  return (
    Array.isArray(value) && value.every((item) => typeof item === 'string')
  );
};

const myFunc = (value: unknown) => {
  if (isArrayOfStrings(value)) {
    console.log(value);
  }
};

myFunc([
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]);

// Object parameters
interface UserPreferences {
  receiveEMail: boolean;
  acceptTC: boolean;
  description?: string;
}

const updateUserPreferences = (userPrefs: UserPreferences) => {
  acceptTC
    ? console.log(`User accepts TC`)
    : console.log(`User doen't accept TC`);
  receiveEMail
    ? console.log(`User receive email notifications`)
    : console.log(`User doesn't receive email notifications`);
};

let acceptTC: boolean = true;
let receiveEMail: boolean = undefined;
let receive_email: boolean = true;

console.log(updateUserPreferences({ acceptTC, receiveEMail }));

const cache: Record<number, Set<string>> = {};

// OPTION 1
const addToCache1 = (index: number, newItem: string) => {
  if (!cache[index]) {
    cache[index] = new Set();
  }
  cache[index].add(newItem);
};

const addToCache2 = (index: number, newItem: string) => {
  (cache[index] ??= new Set()).add(newItem);
};

addToCache1(0, 'papaya');
addToCache1(1, 'banana');
addToCache1(2, 'prune');
addToCache1(3, 'apple');
addToCache1(4, 'strawberry');
for (const key in cache) {
  const data = cache[key];
  data.forEach((d) => console.log(`Fruit: ${d}`));
  // console.log(`key: ${key}: ${data}`);
}
