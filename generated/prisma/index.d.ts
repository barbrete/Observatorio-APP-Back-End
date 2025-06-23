
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Comentario
 * 
 */
export type Comentario = $Result.DefaultSelection<Prisma.$ComentarioPayload>
/**
 * Model CurtidaPost
 * 
 */
export type CurtidaPost = $Result.DefaultSelection<Prisma.$CurtidaPostPayload>
/**
 * Model CurtidaComentario
 * 
 */
export type CurtidaComentario = $Result.DefaultSelection<Prisma.$CurtidaComentarioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **Comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentario.findMany()
    * ```
    */
  get comentario(): Prisma.ComentarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curtidaPost`: Exposes CRUD operations for the **CurtidaPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CurtidaPosts
    * const curtidaPosts = await prisma.curtidaPost.findMany()
    * ```
    */
  get curtidaPost(): Prisma.CurtidaPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curtidaComentario`: Exposes CRUD operations for the **CurtidaComentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CurtidaComentarios
    * const curtidaComentarios = await prisma.curtidaComentario.findMany()
    * ```
    */
  get curtidaComentario(): Prisma.CurtidaComentarioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Post: 'Post',
    Comentario: 'Comentario',
    CurtidaPost: 'CurtidaPost',
    CurtidaComentario: 'CurtidaComentario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "post" | "comentario" | "curtidaPost" | "curtidaComentario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Comentario: {
        payload: Prisma.$ComentarioPayload<ExtArgs>
        fields: Prisma.ComentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findFirst: {
            args: Prisma.ComentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findMany: {
            args: Prisma.ComentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          create: {
            args: Prisma.ComentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          createMany: {
            args: Prisma.ComentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComentarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          delete: {
            args: Prisma.ComentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          update: {
            args: Prisma.ComentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          deleteMany: {
            args: Prisma.ComentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComentarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          upsert: {
            args: Prisma.ComentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentario>
          }
          groupBy: {
            args: Prisma.ComentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComentarioCountArgs<ExtArgs>
            result: $Utils.Optional<ComentarioCountAggregateOutputType> | number
          }
        }
      }
      CurtidaPost: {
        payload: Prisma.$CurtidaPostPayload<ExtArgs>
        fields: Prisma.CurtidaPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurtidaPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurtidaPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPostPayload>
          }
          findFirst: {
            args: Prisma.CurtidaPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurtidaPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPostPayload>
          }
          findMany: {
            args: Prisma.CurtidaPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPostPayload>[]
          }
          create: {
            args: Prisma.CurtidaPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPostPayload>
          }
          createMany: {
            args: Prisma.CurtidaPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurtidaPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPostPayload>[]
          }
          delete: {
            args: Prisma.CurtidaPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPostPayload>
          }
          update: {
            args: Prisma.CurtidaPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPostPayload>
          }
          deleteMany: {
            args: Prisma.CurtidaPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurtidaPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurtidaPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPostPayload>[]
          }
          upsert: {
            args: Prisma.CurtidaPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPostPayload>
          }
          aggregate: {
            args: Prisma.CurtidaPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurtidaPost>
          }
          groupBy: {
            args: Prisma.CurtidaPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurtidaPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurtidaPostCountArgs<ExtArgs>
            result: $Utils.Optional<CurtidaPostCountAggregateOutputType> | number
          }
        }
      }
      CurtidaComentario: {
        payload: Prisma.$CurtidaComentarioPayload<ExtArgs>
        fields: Prisma.CurtidaComentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurtidaComentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaComentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurtidaComentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaComentarioPayload>
          }
          findFirst: {
            args: Prisma.CurtidaComentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaComentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurtidaComentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaComentarioPayload>
          }
          findMany: {
            args: Prisma.CurtidaComentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaComentarioPayload>[]
          }
          create: {
            args: Prisma.CurtidaComentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaComentarioPayload>
          }
          createMany: {
            args: Prisma.CurtidaComentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurtidaComentarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaComentarioPayload>[]
          }
          delete: {
            args: Prisma.CurtidaComentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaComentarioPayload>
          }
          update: {
            args: Prisma.CurtidaComentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaComentarioPayload>
          }
          deleteMany: {
            args: Prisma.CurtidaComentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurtidaComentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurtidaComentarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaComentarioPayload>[]
          }
          upsert: {
            args: Prisma.CurtidaComentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaComentarioPayload>
          }
          aggregate: {
            args: Prisma.CurtidaComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurtidaComentario>
          }
          groupBy: {
            args: Prisma.CurtidaComentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurtidaComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurtidaComentarioCountArgs<ExtArgs>
            result: $Utils.Optional<CurtidaComentarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    post?: PostOmit
    comentario?: ComentarioOmit
    curtidaPost?: CurtidaPostOmit
    curtidaComentario?: CurtidaComentarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    posts: number
    comentarios: number
    curtidasPost: number
    curtidasComentario: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UsuarioCountOutputTypeCountPostsArgs
    comentarios?: boolean | UsuarioCountOutputTypeCountComentariosArgs
    curtidasPost?: boolean | UsuarioCountOutputTypeCountCurtidasPostArgs
    curtidasComentario?: boolean | UsuarioCountOutputTypeCountCurtidasComentarioArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCurtidasPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurtidaPostWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCurtidasComentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurtidaComentarioWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    comentarios: number
    curtidas: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comentarios?: boolean | PostCountOutputTypeCountComentariosArgs
    curtidas?: boolean | PostCountOutputTypeCountCurtidasArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCurtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurtidaPostWhereInput
  }


  /**
   * Count Type ComentarioCountOutputType
   */

  export type ComentarioCountOutputType = {
    curtidas: number
  }

  export type ComentarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curtidas?: boolean | ComentarioCountOutputTypeCountCurtidasArgs
  }

  // Custom InputTypes
  /**
   * ComentarioCountOutputType without action
   */
  export type ComentarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComentarioCountOutputType
     */
    select?: ComentarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComentarioCountOutputType without action
   */
  export type ComentarioCountOutputTypeCountCurtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurtidaComentarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    criadoEm: Date
    atualizadoEm: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    posts?: boolean | Usuario$postsArgs<ExtArgs>
    comentarios?: boolean | Usuario$comentariosArgs<ExtArgs>
    curtidasPost?: boolean | Usuario$curtidasPostArgs<ExtArgs>
    curtidasComentario?: boolean | Usuario$curtidasComentarioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Usuario$postsArgs<ExtArgs>
    comentarios?: boolean | Usuario$comentariosArgs<ExtArgs>
    curtidasPost?: boolean | Usuario$curtidasPostArgs<ExtArgs>
    curtidasComentario?: boolean | Usuario$curtidasComentarioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      curtidasPost: Prisma.$CurtidaPostPayload<ExtArgs>[]
      curtidasComentario: Prisma.$CurtidaComentarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Usuario$postsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends Usuario$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curtidasPost<T extends Usuario$curtidasPostArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$curtidasPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curtidasComentario<T extends Usuario$curtidasComentarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$curtidasComentarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly criadoEm: FieldRef<"Usuario", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.posts
   */
  export type Usuario$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Usuario.comentarios
   */
  export type Usuario$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Usuario.curtidasPost
   */
  export type Usuario$curtidasPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaPost
     */
    select?: CurtidaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaPost
     */
    omit?: CurtidaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaPostInclude<ExtArgs> | null
    where?: CurtidaPostWhereInput
    orderBy?: CurtidaPostOrderByWithRelationInput | CurtidaPostOrderByWithRelationInput[]
    cursor?: CurtidaPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurtidaPostScalarFieldEnum | CurtidaPostScalarFieldEnum[]
  }

  /**
   * Usuario.curtidasComentario
   */
  export type Usuario$curtidasComentarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaComentario
     */
    select?: CurtidaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaComentario
     */
    omit?: CurtidaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaComentarioInclude<ExtArgs> | null
    where?: CurtidaComentarioWhereInput
    orderBy?: CurtidaComentarioOrderByWithRelationInput | CurtidaComentarioOrderByWithRelationInput[]
    cursor?: CurtidaComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurtidaComentarioScalarFieldEnum | CurtidaComentarioScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    conteudo: string | null
    usuarioId: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    conteudo: string | null
    usuarioId: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    conteudo: number
    usuarioId: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    conteudo?: true
    usuarioId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    conteudo?: true
    usuarioId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    conteudo?: true
    usuarioId?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    conteudo: string
    usuarioId: number
    criadoEm: Date
    atualizadoEm: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    comentarios?: boolean | Post$comentariosArgs<ExtArgs>
    curtidas?: boolean | Post$curtidasArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    conteudo?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conteudo" | "usuarioId" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    comentarios?: boolean | Post$comentariosArgs<ExtArgs>
    curtidas?: boolean | Post$curtidasArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      curtidas: Prisma.$CurtidaPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      conteudo: string
      usuarioId: number
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comentarios<T extends Post$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Post$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curtidas<T extends Post$curtidasArgs<ExtArgs> = {}>(args?: Subset<T, Post$curtidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly conteudo: FieldRef<"Post", 'String'>
    readonly usuarioId: FieldRef<"Post", 'Int'>
    readonly criadoEm: FieldRef<"Post", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.comentarios
   */
  export type Post$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Post.curtidas
   */
  export type Post$curtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaPost
     */
    select?: CurtidaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaPost
     */
    omit?: CurtidaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaPostInclude<ExtArgs> | null
    where?: CurtidaPostWhereInput
    orderBy?: CurtidaPostOrderByWithRelationInput | CurtidaPostOrderByWithRelationInput[]
    cursor?: CurtidaPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurtidaPostScalarFieldEnum | CurtidaPostScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  export type ComentarioAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    usuarioId: number | null
  }

  export type ComentarioSumAggregateOutputType = {
    id: number | null
    postId: number | null
    usuarioId: number | null
  }

  export type ComentarioMinAggregateOutputType = {
    id: number | null
    conteudo: string | null
    postId: number | null
    usuarioId: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id: number | null
    conteudo: string | null
    postId: number | null
    usuarioId: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ComentarioCountAggregateOutputType = {
    id: number
    conteudo: number
    postId: number
    usuarioId: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type ComentarioAvgAggregateInputType = {
    id?: true
    postId?: true
    usuarioId?: true
  }

  export type ComentarioSumAggregateInputType = {
    id?: true
    postId?: true
    usuarioId?: true
  }

  export type ComentarioMinAggregateInputType = {
    id?: true
    conteudo?: true
    postId?: true
    usuarioId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id?: true
    conteudo?: true
    postId?: true
    usuarioId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ComentarioCountAggregateInputType = {
    id?: true
    conteudo?: true
    postId?: true
    usuarioId?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type ComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentario to aggregate.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comentarios
    **/
    _count?: true | ComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioMaxAggregateInputType
  }

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>
  }




  export type ComentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithAggregationInput | ComentarioOrderByWithAggregationInput[]
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum
    having?: ComentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioCountAggregateInputType | true
    _avg?: ComentarioAvgAggregateInputType
    _sum?: ComentarioSumAggregateInputType
    _min?: ComentarioMinAggregateInputType
    _max?: ComentarioMaxAggregateInputType
  }

  export type ComentarioGroupByOutputType = {
    id: number
    conteudo: string
    postId: number
    usuarioId: number
    criadoEm: Date
    atualizadoEm: Date
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  type GetComentarioGroupByPayload<T extends ComentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
        }
      >
    >


  export type ComentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    postId?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    curtidas?: boolean | Comentario$curtidasArgs<ExtArgs>
    _count?: boolean | ComentarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    postId?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    postId?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectScalar = {
    id?: boolean
    conteudo?: boolean
    postId?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type ComentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conteudo" | "postId" | "usuarioId" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["comentario"]>
  export type ComentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    curtidas?: boolean | Comentario$curtidasArgs<ExtArgs>
    _count?: boolean | ComentarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComentarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ComentarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ComentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comentario"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      curtidas: Prisma.$CurtidaComentarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      conteudo: string
      postId: number
      usuarioId: number
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["comentario"]>
    composites: {}
  }

  type ComentarioGetPayload<S extends boolean | null | undefined | ComentarioDefaultArgs> = $Result.GetResult<Prisma.$ComentarioPayload, S>

  type ComentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComentarioCountAggregateInputType | true
    }

  export interface ComentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comentario'], meta: { name: 'Comentario' } }
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {ComentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComentarioFindUniqueArgs>(args: SelectSubset<T, ComentarioFindUniqueArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ComentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComentarioFindFirstArgs>(args?: SelectSubset<T, ComentarioFindFirstArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ComentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentarioWithIdOnly = await prisma.comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComentarioFindManyArgs>(args?: SelectSubset<T, ComentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comentario.
     * @param {ComentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     * 
     */
    create<T extends ComentarioCreateArgs>(args: SelectSubset<T, ComentarioCreateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comentarios.
     * @param {ComentarioCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComentarioCreateManyArgs>(args?: SelectSubset<T, ComentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comentarios and returns the data saved in the database.
     * @param {ComentarioCreateManyAndReturnArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comentarios and only return the `id`
     * const comentarioWithIdOnly = await prisma.comentario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComentarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ComentarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comentario.
     * @param {ComentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     * 
     */
    delete<T extends ComentarioDeleteArgs>(args: SelectSubset<T, ComentarioDeleteArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comentario.
     * @param {ComentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComentarioUpdateArgs>(args: SelectSubset<T, ComentarioUpdateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comentarios.
     * @param {ComentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComentarioDeleteManyArgs>(args?: SelectSubset<T, ComentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComentarioUpdateManyArgs>(args: SelectSubset<T, ComentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios and returns the data updated in the database.
     * @param {ComentarioUpdateManyAndReturnArgs} args - Arguments to update many Comentarios.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comentarios and only return the `id`
     * const comentarioWithIdOnly = await prisma.comentario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComentarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ComentarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comentario.
     * @param {ComentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
     */
    upsert<T extends ComentarioUpsertArgs>(args: SelectSubset<T, ComentarioUpsertArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends ComentarioCountArgs>(
      args?: Subset<T, ComentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComentarioAggregateArgs>(args: Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComentarioGroupByArgs['orderBy'] }
        : { orderBy?: ComentarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comentario model
   */
  readonly fields: ComentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    curtidas<T extends Comentario$curtidasArgs<ExtArgs> = {}>(args?: Subset<T, Comentario$curtidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comentario model
   */
  interface ComentarioFieldRefs {
    readonly id: FieldRef<"Comentario", 'Int'>
    readonly conteudo: FieldRef<"Comentario", 'String'>
    readonly postId: FieldRef<"Comentario", 'Int'>
    readonly usuarioId: FieldRef<"Comentario", 'Int'>
    readonly criadoEm: FieldRef<"Comentario", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Comentario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comentario findUnique
   */
  export type ComentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findUniqueOrThrow
   */
  export type ComentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findFirst
   */
  export type ComentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findFirstOrThrow
   */
  export type ComentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findMany
   */
  export type ComentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario create
   */
  export type ComentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Comentario.
     */
    data: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
  }

  /**
   * Comentario createMany
   */
  export type ComentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comentario createManyAndReturn
   */
  export type ComentarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comentario update
   */
  export type ComentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Comentario.
     */
    data: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
    /**
     * Choose, which Comentario to update.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario updateMany
   */
  export type ComentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
  }

  /**
   * Comentario updateManyAndReturn
   */
  export type ComentarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comentario upsert
   */
  export type ComentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Comentario to update in case it exists.
     */
    where: ComentarioWhereUniqueInput
    /**
     * In case the Comentario found by the `where` argument doesn't exist, create a new Comentario with this data.
     */
    create: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
    /**
     * In case the Comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
  }

  /**
   * Comentario delete
   */
  export type ComentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter which Comentario to delete.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario deleteMany
   */
  export type ComentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentarios to delete
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to delete.
     */
    limit?: number
  }

  /**
   * Comentario.curtidas
   */
  export type Comentario$curtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaComentario
     */
    select?: CurtidaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaComentario
     */
    omit?: CurtidaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaComentarioInclude<ExtArgs> | null
    where?: CurtidaComentarioWhereInput
    orderBy?: CurtidaComentarioOrderByWithRelationInput | CurtidaComentarioOrderByWithRelationInput[]
    cursor?: CurtidaComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurtidaComentarioScalarFieldEnum | CurtidaComentarioScalarFieldEnum[]
  }

  /**
   * Comentario without action
   */
  export type ComentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
  }


  /**
   * Model CurtidaPost
   */

  export type AggregateCurtidaPost = {
    _count: CurtidaPostCountAggregateOutputType | null
    _avg: CurtidaPostAvgAggregateOutputType | null
    _sum: CurtidaPostSumAggregateOutputType | null
    _min: CurtidaPostMinAggregateOutputType | null
    _max: CurtidaPostMaxAggregateOutputType | null
  }

  export type CurtidaPostAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    postId: number | null
  }

  export type CurtidaPostSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    postId: number | null
  }

  export type CurtidaPostMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    postId: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type CurtidaPostMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    postId: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type CurtidaPostCountAggregateOutputType = {
    id: number
    usuarioId: number
    postId: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type CurtidaPostAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    postId?: true
  }

  export type CurtidaPostSumAggregateInputType = {
    id?: true
    usuarioId?: true
    postId?: true
  }

  export type CurtidaPostMinAggregateInputType = {
    id?: true
    usuarioId?: true
    postId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type CurtidaPostMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    postId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type CurtidaPostCountAggregateInputType = {
    id?: true
    usuarioId?: true
    postId?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type CurtidaPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurtidaPost to aggregate.
     */
    where?: CurtidaPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurtidaPosts to fetch.
     */
    orderBy?: CurtidaPostOrderByWithRelationInput | CurtidaPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurtidaPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurtidaPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurtidaPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CurtidaPosts
    **/
    _count?: true | CurtidaPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurtidaPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurtidaPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurtidaPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurtidaPostMaxAggregateInputType
  }

  export type GetCurtidaPostAggregateType<T extends CurtidaPostAggregateArgs> = {
        [P in keyof T & keyof AggregateCurtidaPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurtidaPost[P]>
      : GetScalarType<T[P], AggregateCurtidaPost[P]>
  }




  export type CurtidaPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurtidaPostWhereInput
    orderBy?: CurtidaPostOrderByWithAggregationInput | CurtidaPostOrderByWithAggregationInput[]
    by: CurtidaPostScalarFieldEnum[] | CurtidaPostScalarFieldEnum
    having?: CurtidaPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurtidaPostCountAggregateInputType | true
    _avg?: CurtidaPostAvgAggregateInputType
    _sum?: CurtidaPostSumAggregateInputType
    _min?: CurtidaPostMinAggregateInputType
    _max?: CurtidaPostMaxAggregateInputType
  }

  export type CurtidaPostGroupByOutputType = {
    id: number
    usuarioId: number
    postId: number
    criadoEm: Date
    atualizadoEm: Date
    _count: CurtidaPostCountAggregateOutputType | null
    _avg: CurtidaPostAvgAggregateOutputType | null
    _sum: CurtidaPostSumAggregateOutputType | null
    _min: CurtidaPostMinAggregateOutputType | null
    _max: CurtidaPostMaxAggregateOutputType | null
  }

  type GetCurtidaPostGroupByPayload<T extends CurtidaPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurtidaPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurtidaPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurtidaPostGroupByOutputType[P]>
            : GetScalarType<T[P], CurtidaPostGroupByOutputType[P]>
        }
      >
    >


  export type CurtidaPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    postId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtidaPost"]>

  export type CurtidaPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    postId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtidaPost"]>

  export type CurtidaPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    postId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtidaPost"]>

  export type CurtidaPostSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    postId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type CurtidaPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "postId" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["curtidaPost"]>
  export type CurtidaPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type CurtidaPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type CurtidaPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $CurtidaPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CurtidaPost"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      postId: number
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["curtidaPost"]>
    composites: {}
  }

  type CurtidaPostGetPayload<S extends boolean | null | undefined | CurtidaPostDefaultArgs> = $Result.GetResult<Prisma.$CurtidaPostPayload, S>

  type CurtidaPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurtidaPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurtidaPostCountAggregateInputType | true
    }

  export interface CurtidaPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CurtidaPost'], meta: { name: 'CurtidaPost' } }
    /**
     * Find zero or one CurtidaPost that matches the filter.
     * @param {CurtidaPostFindUniqueArgs} args - Arguments to find a CurtidaPost
     * @example
     * // Get one CurtidaPost
     * const curtidaPost = await prisma.curtidaPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurtidaPostFindUniqueArgs>(args: SelectSubset<T, CurtidaPostFindUniqueArgs<ExtArgs>>): Prisma__CurtidaPostClient<$Result.GetResult<Prisma.$CurtidaPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CurtidaPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurtidaPostFindUniqueOrThrowArgs} args - Arguments to find a CurtidaPost
     * @example
     * // Get one CurtidaPost
     * const curtidaPost = await prisma.curtidaPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurtidaPostFindUniqueOrThrowArgs>(args: SelectSubset<T, CurtidaPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurtidaPostClient<$Result.GetResult<Prisma.$CurtidaPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurtidaPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaPostFindFirstArgs} args - Arguments to find a CurtidaPost
     * @example
     * // Get one CurtidaPost
     * const curtidaPost = await prisma.curtidaPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurtidaPostFindFirstArgs>(args?: SelectSubset<T, CurtidaPostFindFirstArgs<ExtArgs>>): Prisma__CurtidaPostClient<$Result.GetResult<Prisma.$CurtidaPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurtidaPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaPostFindFirstOrThrowArgs} args - Arguments to find a CurtidaPost
     * @example
     * // Get one CurtidaPost
     * const curtidaPost = await prisma.curtidaPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurtidaPostFindFirstOrThrowArgs>(args?: SelectSubset<T, CurtidaPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurtidaPostClient<$Result.GetResult<Prisma.$CurtidaPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CurtidaPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CurtidaPosts
     * const curtidaPosts = await prisma.curtidaPost.findMany()
     * 
     * // Get first 10 CurtidaPosts
     * const curtidaPosts = await prisma.curtidaPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const curtidaPostWithIdOnly = await prisma.curtidaPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurtidaPostFindManyArgs>(args?: SelectSubset<T, CurtidaPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CurtidaPost.
     * @param {CurtidaPostCreateArgs} args - Arguments to create a CurtidaPost.
     * @example
     * // Create one CurtidaPost
     * const CurtidaPost = await prisma.curtidaPost.create({
     *   data: {
     *     // ... data to create a CurtidaPost
     *   }
     * })
     * 
     */
    create<T extends CurtidaPostCreateArgs>(args: SelectSubset<T, CurtidaPostCreateArgs<ExtArgs>>): Prisma__CurtidaPostClient<$Result.GetResult<Prisma.$CurtidaPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CurtidaPosts.
     * @param {CurtidaPostCreateManyArgs} args - Arguments to create many CurtidaPosts.
     * @example
     * // Create many CurtidaPosts
     * const curtidaPost = await prisma.curtidaPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurtidaPostCreateManyArgs>(args?: SelectSubset<T, CurtidaPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CurtidaPosts and returns the data saved in the database.
     * @param {CurtidaPostCreateManyAndReturnArgs} args - Arguments to create many CurtidaPosts.
     * @example
     * // Create many CurtidaPosts
     * const curtidaPost = await prisma.curtidaPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CurtidaPosts and only return the `id`
     * const curtidaPostWithIdOnly = await prisma.curtidaPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurtidaPostCreateManyAndReturnArgs>(args?: SelectSubset<T, CurtidaPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CurtidaPost.
     * @param {CurtidaPostDeleteArgs} args - Arguments to delete one CurtidaPost.
     * @example
     * // Delete one CurtidaPost
     * const CurtidaPost = await prisma.curtidaPost.delete({
     *   where: {
     *     // ... filter to delete one CurtidaPost
     *   }
     * })
     * 
     */
    delete<T extends CurtidaPostDeleteArgs>(args: SelectSubset<T, CurtidaPostDeleteArgs<ExtArgs>>): Prisma__CurtidaPostClient<$Result.GetResult<Prisma.$CurtidaPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CurtidaPost.
     * @param {CurtidaPostUpdateArgs} args - Arguments to update one CurtidaPost.
     * @example
     * // Update one CurtidaPost
     * const curtidaPost = await prisma.curtidaPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurtidaPostUpdateArgs>(args: SelectSubset<T, CurtidaPostUpdateArgs<ExtArgs>>): Prisma__CurtidaPostClient<$Result.GetResult<Prisma.$CurtidaPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CurtidaPosts.
     * @param {CurtidaPostDeleteManyArgs} args - Arguments to filter CurtidaPosts to delete.
     * @example
     * // Delete a few CurtidaPosts
     * const { count } = await prisma.curtidaPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurtidaPostDeleteManyArgs>(args?: SelectSubset<T, CurtidaPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurtidaPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CurtidaPosts
     * const curtidaPost = await prisma.curtidaPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurtidaPostUpdateManyArgs>(args: SelectSubset<T, CurtidaPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurtidaPosts and returns the data updated in the database.
     * @param {CurtidaPostUpdateManyAndReturnArgs} args - Arguments to update many CurtidaPosts.
     * @example
     * // Update many CurtidaPosts
     * const curtidaPost = await prisma.curtidaPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CurtidaPosts and only return the `id`
     * const curtidaPostWithIdOnly = await prisma.curtidaPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CurtidaPostUpdateManyAndReturnArgs>(args: SelectSubset<T, CurtidaPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CurtidaPost.
     * @param {CurtidaPostUpsertArgs} args - Arguments to update or create a CurtidaPost.
     * @example
     * // Update or create a CurtidaPost
     * const curtidaPost = await prisma.curtidaPost.upsert({
     *   create: {
     *     // ... data to create a CurtidaPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CurtidaPost we want to update
     *   }
     * })
     */
    upsert<T extends CurtidaPostUpsertArgs>(args: SelectSubset<T, CurtidaPostUpsertArgs<ExtArgs>>): Prisma__CurtidaPostClient<$Result.GetResult<Prisma.$CurtidaPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CurtidaPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaPostCountArgs} args - Arguments to filter CurtidaPosts to count.
     * @example
     * // Count the number of CurtidaPosts
     * const count = await prisma.curtidaPost.count({
     *   where: {
     *     // ... the filter for the CurtidaPosts we want to count
     *   }
     * })
    **/
    count<T extends CurtidaPostCountArgs>(
      args?: Subset<T, CurtidaPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurtidaPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CurtidaPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurtidaPostAggregateArgs>(args: Subset<T, CurtidaPostAggregateArgs>): Prisma.PrismaPromise<GetCurtidaPostAggregateType<T>>

    /**
     * Group by CurtidaPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurtidaPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurtidaPostGroupByArgs['orderBy'] }
        : { orderBy?: CurtidaPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurtidaPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurtidaPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CurtidaPost model
   */
  readonly fields: CurtidaPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CurtidaPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurtidaPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CurtidaPost model
   */
  interface CurtidaPostFieldRefs {
    readonly id: FieldRef<"CurtidaPost", 'Int'>
    readonly usuarioId: FieldRef<"CurtidaPost", 'Int'>
    readonly postId: FieldRef<"CurtidaPost", 'Int'>
    readonly criadoEm: FieldRef<"CurtidaPost", 'DateTime'>
    readonly atualizadoEm: FieldRef<"CurtidaPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CurtidaPost findUnique
   */
  export type CurtidaPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaPost
     */
    select?: CurtidaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaPost
     */
    omit?: CurtidaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaPostInclude<ExtArgs> | null
    /**
     * Filter, which CurtidaPost to fetch.
     */
    where: CurtidaPostWhereUniqueInput
  }

  /**
   * CurtidaPost findUniqueOrThrow
   */
  export type CurtidaPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaPost
     */
    select?: CurtidaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaPost
     */
    omit?: CurtidaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaPostInclude<ExtArgs> | null
    /**
     * Filter, which CurtidaPost to fetch.
     */
    where: CurtidaPostWhereUniqueInput
  }

  /**
   * CurtidaPost findFirst
   */
  export type CurtidaPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaPost
     */
    select?: CurtidaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaPost
     */
    omit?: CurtidaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaPostInclude<ExtArgs> | null
    /**
     * Filter, which CurtidaPost to fetch.
     */
    where?: CurtidaPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurtidaPosts to fetch.
     */
    orderBy?: CurtidaPostOrderByWithRelationInput | CurtidaPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurtidaPosts.
     */
    cursor?: CurtidaPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurtidaPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurtidaPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurtidaPosts.
     */
    distinct?: CurtidaPostScalarFieldEnum | CurtidaPostScalarFieldEnum[]
  }

  /**
   * CurtidaPost findFirstOrThrow
   */
  export type CurtidaPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaPost
     */
    select?: CurtidaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaPost
     */
    omit?: CurtidaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaPostInclude<ExtArgs> | null
    /**
     * Filter, which CurtidaPost to fetch.
     */
    where?: CurtidaPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurtidaPosts to fetch.
     */
    orderBy?: CurtidaPostOrderByWithRelationInput | CurtidaPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurtidaPosts.
     */
    cursor?: CurtidaPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurtidaPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurtidaPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurtidaPosts.
     */
    distinct?: CurtidaPostScalarFieldEnum | CurtidaPostScalarFieldEnum[]
  }

  /**
   * CurtidaPost findMany
   */
  export type CurtidaPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaPost
     */
    select?: CurtidaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaPost
     */
    omit?: CurtidaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaPostInclude<ExtArgs> | null
    /**
     * Filter, which CurtidaPosts to fetch.
     */
    where?: CurtidaPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurtidaPosts to fetch.
     */
    orderBy?: CurtidaPostOrderByWithRelationInput | CurtidaPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CurtidaPosts.
     */
    cursor?: CurtidaPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurtidaPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurtidaPosts.
     */
    skip?: number
    distinct?: CurtidaPostScalarFieldEnum | CurtidaPostScalarFieldEnum[]
  }

  /**
   * CurtidaPost create
   */
  export type CurtidaPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaPost
     */
    select?: CurtidaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaPost
     */
    omit?: CurtidaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaPostInclude<ExtArgs> | null
    /**
     * The data needed to create a CurtidaPost.
     */
    data: XOR<CurtidaPostCreateInput, CurtidaPostUncheckedCreateInput>
  }

  /**
   * CurtidaPost createMany
   */
  export type CurtidaPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CurtidaPosts.
     */
    data: CurtidaPostCreateManyInput | CurtidaPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CurtidaPost createManyAndReturn
   */
  export type CurtidaPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaPost
     */
    select?: CurtidaPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaPost
     */
    omit?: CurtidaPostOmit<ExtArgs> | null
    /**
     * The data used to create many CurtidaPosts.
     */
    data: CurtidaPostCreateManyInput | CurtidaPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CurtidaPost update
   */
  export type CurtidaPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaPost
     */
    select?: CurtidaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaPost
     */
    omit?: CurtidaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaPostInclude<ExtArgs> | null
    /**
     * The data needed to update a CurtidaPost.
     */
    data: XOR<CurtidaPostUpdateInput, CurtidaPostUncheckedUpdateInput>
    /**
     * Choose, which CurtidaPost to update.
     */
    where: CurtidaPostWhereUniqueInput
  }

  /**
   * CurtidaPost updateMany
   */
  export type CurtidaPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CurtidaPosts.
     */
    data: XOR<CurtidaPostUpdateManyMutationInput, CurtidaPostUncheckedUpdateManyInput>
    /**
     * Filter which CurtidaPosts to update
     */
    where?: CurtidaPostWhereInput
    /**
     * Limit how many CurtidaPosts to update.
     */
    limit?: number
  }

  /**
   * CurtidaPost updateManyAndReturn
   */
  export type CurtidaPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaPost
     */
    select?: CurtidaPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaPost
     */
    omit?: CurtidaPostOmit<ExtArgs> | null
    /**
     * The data used to update CurtidaPosts.
     */
    data: XOR<CurtidaPostUpdateManyMutationInput, CurtidaPostUncheckedUpdateManyInput>
    /**
     * Filter which CurtidaPosts to update
     */
    where?: CurtidaPostWhereInput
    /**
     * Limit how many CurtidaPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CurtidaPost upsert
   */
  export type CurtidaPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaPost
     */
    select?: CurtidaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaPost
     */
    omit?: CurtidaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaPostInclude<ExtArgs> | null
    /**
     * The filter to search for the CurtidaPost to update in case it exists.
     */
    where: CurtidaPostWhereUniqueInput
    /**
     * In case the CurtidaPost found by the `where` argument doesn't exist, create a new CurtidaPost with this data.
     */
    create: XOR<CurtidaPostCreateInput, CurtidaPostUncheckedCreateInput>
    /**
     * In case the CurtidaPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurtidaPostUpdateInput, CurtidaPostUncheckedUpdateInput>
  }

  /**
   * CurtidaPost delete
   */
  export type CurtidaPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaPost
     */
    select?: CurtidaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaPost
     */
    omit?: CurtidaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaPostInclude<ExtArgs> | null
    /**
     * Filter which CurtidaPost to delete.
     */
    where: CurtidaPostWhereUniqueInput
  }

  /**
   * CurtidaPost deleteMany
   */
  export type CurtidaPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurtidaPosts to delete
     */
    where?: CurtidaPostWhereInput
    /**
     * Limit how many CurtidaPosts to delete.
     */
    limit?: number
  }

  /**
   * CurtidaPost without action
   */
  export type CurtidaPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaPost
     */
    select?: CurtidaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaPost
     */
    omit?: CurtidaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaPostInclude<ExtArgs> | null
  }


  /**
   * Model CurtidaComentario
   */

  export type AggregateCurtidaComentario = {
    _count: CurtidaComentarioCountAggregateOutputType | null
    _avg: CurtidaComentarioAvgAggregateOutputType | null
    _sum: CurtidaComentarioSumAggregateOutputType | null
    _min: CurtidaComentarioMinAggregateOutputType | null
    _max: CurtidaComentarioMaxAggregateOutputType | null
  }

  export type CurtidaComentarioAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    comentarioId: number | null
  }

  export type CurtidaComentarioSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    comentarioId: number | null
  }

  export type CurtidaComentarioMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    comentarioId: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type CurtidaComentarioMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    comentarioId: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type CurtidaComentarioCountAggregateOutputType = {
    id: number
    usuarioId: number
    comentarioId: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type CurtidaComentarioAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    comentarioId?: true
  }

  export type CurtidaComentarioSumAggregateInputType = {
    id?: true
    usuarioId?: true
    comentarioId?: true
  }

  export type CurtidaComentarioMinAggregateInputType = {
    id?: true
    usuarioId?: true
    comentarioId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type CurtidaComentarioMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    comentarioId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type CurtidaComentarioCountAggregateInputType = {
    id?: true
    usuarioId?: true
    comentarioId?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type CurtidaComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurtidaComentario to aggregate.
     */
    where?: CurtidaComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurtidaComentarios to fetch.
     */
    orderBy?: CurtidaComentarioOrderByWithRelationInput | CurtidaComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurtidaComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurtidaComentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurtidaComentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CurtidaComentarios
    **/
    _count?: true | CurtidaComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurtidaComentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurtidaComentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurtidaComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurtidaComentarioMaxAggregateInputType
  }

  export type GetCurtidaComentarioAggregateType<T extends CurtidaComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateCurtidaComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurtidaComentario[P]>
      : GetScalarType<T[P], AggregateCurtidaComentario[P]>
  }




  export type CurtidaComentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurtidaComentarioWhereInput
    orderBy?: CurtidaComentarioOrderByWithAggregationInput | CurtidaComentarioOrderByWithAggregationInput[]
    by: CurtidaComentarioScalarFieldEnum[] | CurtidaComentarioScalarFieldEnum
    having?: CurtidaComentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurtidaComentarioCountAggregateInputType | true
    _avg?: CurtidaComentarioAvgAggregateInputType
    _sum?: CurtidaComentarioSumAggregateInputType
    _min?: CurtidaComentarioMinAggregateInputType
    _max?: CurtidaComentarioMaxAggregateInputType
  }

  export type CurtidaComentarioGroupByOutputType = {
    id: number
    usuarioId: number
    comentarioId: number
    criadoEm: Date
    atualizadoEm: Date
    _count: CurtidaComentarioCountAggregateOutputType | null
    _avg: CurtidaComentarioAvgAggregateOutputType | null
    _sum: CurtidaComentarioSumAggregateOutputType | null
    _min: CurtidaComentarioMinAggregateOutputType | null
    _max: CurtidaComentarioMaxAggregateOutputType | null
  }

  type GetCurtidaComentarioGroupByPayload<T extends CurtidaComentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurtidaComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurtidaComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurtidaComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], CurtidaComentarioGroupByOutputType[P]>
        }
      >
    >


  export type CurtidaComentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    comentarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    comentario?: boolean | ComentarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtidaComentario"]>

  export type CurtidaComentarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    comentarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    comentario?: boolean | ComentarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtidaComentario"]>

  export type CurtidaComentarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    comentarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    comentario?: boolean | ComentarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtidaComentario"]>

  export type CurtidaComentarioSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    comentarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type CurtidaComentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "comentarioId" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["curtidaComentario"]>
  export type CurtidaComentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    comentario?: boolean | ComentarioDefaultArgs<ExtArgs>
  }
  export type CurtidaComentarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    comentario?: boolean | ComentarioDefaultArgs<ExtArgs>
  }
  export type CurtidaComentarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    comentario?: boolean | ComentarioDefaultArgs<ExtArgs>
  }

  export type $CurtidaComentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CurtidaComentario"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      comentario: Prisma.$ComentarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      comentarioId: number
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["curtidaComentario"]>
    composites: {}
  }

  type CurtidaComentarioGetPayload<S extends boolean | null | undefined | CurtidaComentarioDefaultArgs> = $Result.GetResult<Prisma.$CurtidaComentarioPayload, S>

  type CurtidaComentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurtidaComentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurtidaComentarioCountAggregateInputType | true
    }

  export interface CurtidaComentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CurtidaComentario'], meta: { name: 'CurtidaComentario' } }
    /**
     * Find zero or one CurtidaComentario that matches the filter.
     * @param {CurtidaComentarioFindUniqueArgs} args - Arguments to find a CurtidaComentario
     * @example
     * // Get one CurtidaComentario
     * const curtidaComentario = await prisma.curtidaComentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurtidaComentarioFindUniqueArgs>(args: SelectSubset<T, CurtidaComentarioFindUniqueArgs<ExtArgs>>): Prisma__CurtidaComentarioClient<$Result.GetResult<Prisma.$CurtidaComentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CurtidaComentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurtidaComentarioFindUniqueOrThrowArgs} args - Arguments to find a CurtidaComentario
     * @example
     * // Get one CurtidaComentario
     * const curtidaComentario = await prisma.curtidaComentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurtidaComentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, CurtidaComentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurtidaComentarioClient<$Result.GetResult<Prisma.$CurtidaComentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurtidaComentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaComentarioFindFirstArgs} args - Arguments to find a CurtidaComentario
     * @example
     * // Get one CurtidaComentario
     * const curtidaComentario = await prisma.curtidaComentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurtidaComentarioFindFirstArgs>(args?: SelectSubset<T, CurtidaComentarioFindFirstArgs<ExtArgs>>): Prisma__CurtidaComentarioClient<$Result.GetResult<Prisma.$CurtidaComentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurtidaComentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaComentarioFindFirstOrThrowArgs} args - Arguments to find a CurtidaComentario
     * @example
     * // Get one CurtidaComentario
     * const curtidaComentario = await prisma.curtidaComentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurtidaComentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, CurtidaComentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurtidaComentarioClient<$Result.GetResult<Prisma.$CurtidaComentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CurtidaComentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaComentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CurtidaComentarios
     * const curtidaComentarios = await prisma.curtidaComentario.findMany()
     * 
     * // Get first 10 CurtidaComentarios
     * const curtidaComentarios = await prisma.curtidaComentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const curtidaComentarioWithIdOnly = await prisma.curtidaComentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurtidaComentarioFindManyArgs>(args?: SelectSubset<T, CurtidaComentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CurtidaComentario.
     * @param {CurtidaComentarioCreateArgs} args - Arguments to create a CurtidaComentario.
     * @example
     * // Create one CurtidaComentario
     * const CurtidaComentario = await prisma.curtidaComentario.create({
     *   data: {
     *     // ... data to create a CurtidaComentario
     *   }
     * })
     * 
     */
    create<T extends CurtidaComentarioCreateArgs>(args: SelectSubset<T, CurtidaComentarioCreateArgs<ExtArgs>>): Prisma__CurtidaComentarioClient<$Result.GetResult<Prisma.$CurtidaComentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CurtidaComentarios.
     * @param {CurtidaComentarioCreateManyArgs} args - Arguments to create many CurtidaComentarios.
     * @example
     * // Create many CurtidaComentarios
     * const curtidaComentario = await prisma.curtidaComentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurtidaComentarioCreateManyArgs>(args?: SelectSubset<T, CurtidaComentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CurtidaComentarios and returns the data saved in the database.
     * @param {CurtidaComentarioCreateManyAndReturnArgs} args - Arguments to create many CurtidaComentarios.
     * @example
     * // Create many CurtidaComentarios
     * const curtidaComentario = await prisma.curtidaComentario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CurtidaComentarios and only return the `id`
     * const curtidaComentarioWithIdOnly = await prisma.curtidaComentario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurtidaComentarioCreateManyAndReturnArgs>(args?: SelectSubset<T, CurtidaComentarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaComentarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CurtidaComentario.
     * @param {CurtidaComentarioDeleteArgs} args - Arguments to delete one CurtidaComentario.
     * @example
     * // Delete one CurtidaComentario
     * const CurtidaComentario = await prisma.curtidaComentario.delete({
     *   where: {
     *     // ... filter to delete one CurtidaComentario
     *   }
     * })
     * 
     */
    delete<T extends CurtidaComentarioDeleteArgs>(args: SelectSubset<T, CurtidaComentarioDeleteArgs<ExtArgs>>): Prisma__CurtidaComentarioClient<$Result.GetResult<Prisma.$CurtidaComentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CurtidaComentario.
     * @param {CurtidaComentarioUpdateArgs} args - Arguments to update one CurtidaComentario.
     * @example
     * // Update one CurtidaComentario
     * const curtidaComentario = await prisma.curtidaComentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurtidaComentarioUpdateArgs>(args: SelectSubset<T, CurtidaComentarioUpdateArgs<ExtArgs>>): Prisma__CurtidaComentarioClient<$Result.GetResult<Prisma.$CurtidaComentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CurtidaComentarios.
     * @param {CurtidaComentarioDeleteManyArgs} args - Arguments to filter CurtidaComentarios to delete.
     * @example
     * // Delete a few CurtidaComentarios
     * const { count } = await prisma.curtidaComentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurtidaComentarioDeleteManyArgs>(args?: SelectSubset<T, CurtidaComentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurtidaComentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaComentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CurtidaComentarios
     * const curtidaComentario = await prisma.curtidaComentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurtidaComentarioUpdateManyArgs>(args: SelectSubset<T, CurtidaComentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurtidaComentarios and returns the data updated in the database.
     * @param {CurtidaComentarioUpdateManyAndReturnArgs} args - Arguments to update many CurtidaComentarios.
     * @example
     * // Update many CurtidaComentarios
     * const curtidaComentario = await prisma.curtidaComentario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CurtidaComentarios and only return the `id`
     * const curtidaComentarioWithIdOnly = await prisma.curtidaComentario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CurtidaComentarioUpdateManyAndReturnArgs>(args: SelectSubset<T, CurtidaComentarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaComentarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CurtidaComentario.
     * @param {CurtidaComentarioUpsertArgs} args - Arguments to update or create a CurtidaComentario.
     * @example
     * // Update or create a CurtidaComentario
     * const curtidaComentario = await prisma.curtidaComentario.upsert({
     *   create: {
     *     // ... data to create a CurtidaComentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CurtidaComentario we want to update
     *   }
     * })
     */
    upsert<T extends CurtidaComentarioUpsertArgs>(args: SelectSubset<T, CurtidaComentarioUpsertArgs<ExtArgs>>): Prisma__CurtidaComentarioClient<$Result.GetResult<Prisma.$CurtidaComentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CurtidaComentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaComentarioCountArgs} args - Arguments to filter CurtidaComentarios to count.
     * @example
     * // Count the number of CurtidaComentarios
     * const count = await prisma.curtidaComentario.count({
     *   where: {
     *     // ... the filter for the CurtidaComentarios we want to count
     *   }
     * })
    **/
    count<T extends CurtidaComentarioCountArgs>(
      args?: Subset<T, CurtidaComentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurtidaComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CurtidaComentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurtidaComentarioAggregateArgs>(args: Subset<T, CurtidaComentarioAggregateArgs>): Prisma.PrismaPromise<GetCurtidaComentarioAggregateType<T>>

    /**
     * Group by CurtidaComentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaComentarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurtidaComentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurtidaComentarioGroupByArgs['orderBy'] }
        : { orderBy?: CurtidaComentarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurtidaComentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurtidaComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CurtidaComentario model
   */
  readonly fields: CurtidaComentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CurtidaComentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurtidaComentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comentario<T extends ComentarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComentarioDefaultArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CurtidaComentario model
   */
  interface CurtidaComentarioFieldRefs {
    readonly id: FieldRef<"CurtidaComentario", 'Int'>
    readonly usuarioId: FieldRef<"CurtidaComentario", 'Int'>
    readonly comentarioId: FieldRef<"CurtidaComentario", 'Int'>
    readonly criadoEm: FieldRef<"CurtidaComentario", 'DateTime'>
    readonly atualizadoEm: FieldRef<"CurtidaComentario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CurtidaComentario findUnique
   */
  export type CurtidaComentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaComentario
     */
    select?: CurtidaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaComentario
     */
    omit?: CurtidaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaComentarioInclude<ExtArgs> | null
    /**
     * Filter, which CurtidaComentario to fetch.
     */
    where: CurtidaComentarioWhereUniqueInput
  }

  /**
   * CurtidaComentario findUniqueOrThrow
   */
  export type CurtidaComentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaComentario
     */
    select?: CurtidaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaComentario
     */
    omit?: CurtidaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaComentarioInclude<ExtArgs> | null
    /**
     * Filter, which CurtidaComentario to fetch.
     */
    where: CurtidaComentarioWhereUniqueInput
  }

  /**
   * CurtidaComentario findFirst
   */
  export type CurtidaComentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaComentario
     */
    select?: CurtidaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaComentario
     */
    omit?: CurtidaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaComentarioInclude<ExtArgs> | null
    /**
     * Filter, which CurtidaComentario to fetch.
     */
    where?: CurtidaComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurtidaComentarios to fetch.
     */
    orderBy?: CurtidaComentarioOrderByWithRelationInput | CurtidaComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurtidaComentarios.
     */
    cursor?: CurtidaComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurtidaComentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurtidaComentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurtidaComentarios.
     */
    distinct?: CurtidaComentarioScalarFieldEnum | CurtidaComentarioScalarFieldEnum[]
  }

  /**
   * CurtidaComentario findFirstOrThrow
   */
  export type CurtidaComentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaComentario
     */
    select?: CurtidaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaComentario
     */
    omit?: CurtidaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaComentarioInclude<ExtArgs> | null
    /**
     * Filter, which CurtidaComentario to fetch.
     */
    where?: CurtidaComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurtidaComentarios to fetch.
     */
    orderBy?: CurtidaComentarioOrderByWithRelationInput | CurtidaComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurtidaComentarios.
     */
    cursor?: CurtidaComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurtidaComentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurtidaComentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurtidaComentarios.
     */
    distinct?: CurtidaComentarioScalarFieldEnum | CurtidaComentarioScalarFieldEnum[]
  }

  /**
   * CurtidaComentario findMany
   */
  export type CurtidaComentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaComentario
     */
    select?: CurtidaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaComentario
     */
    omit?: CurtidaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaComentarioInclude<ExtArgs> | null
    /**
     * Filter, which CurtidaComentarios to fetch.
     */
    where?: CurtidaComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurtidaComentarios to fetch.
     */
    orderBy?: CurtidaComentarioOrderByWithRelationInput | CurtidaComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CurtidaComentarios.
     */
    cursor?: CurtidaComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurtidaComentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurtidaComentarios.
     */
    skip?: number
    distinct?: CurtidaComentarioScalarFieldEnum | CurtidaComentarioScalarFieldEnum[]
  }

  /**
   * CurtidaComentario create
   */
  export type CurtidaComentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaComentario
     */
    select?: CurtidaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaComentario
     */
    omit?: CurtidaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaComentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a CurtidaComentario.
     */
    data: XOR<CurtidaComentarioCreateInput, CurtidaComentarioUncheckedCreateInput>
  }

  /**
   * CurtidaComentario createMany
   */
  export type CurtidaComentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CurtidaComentarios.
     */
    data: CurtidaComentarioCreateManyInput | CurtidaComentarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CurtidaComentario createManyAndReturn
   */
  export type CurtidaComentarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaComentario
     */
    select?: CurtidaComentarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaComentario
     */
    omit?: CurtidaComentarioOmit<ExtArgs> | null
    /**
     * The data used to create many CurtidaComentarios.
     */
    data: CurtidaComentarioCreateManyInput | CurtidaComentarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaComentarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CurtidaComentario update
   */
  export type CurtidaComentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaComentario
     */
    select?: CurtidaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaComentario
     */
    omit?: CurtidaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaComentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a CurtidaComentario.
     */
    data: XOR<CurtidaComentarioUpdateInput, CurtidaComentarioUncheckedUpdateInput>
    /**
     * Choose, which CurtidaComentario to update.
     */
    where: CurtidaComentarioWhereUniqueInput
  }

  /**
   * CurtidaComentario updateMany
   */
  export type CurtidaComentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CurtidaComentarios.
     */
    data: XOR<CurtidaComentarioUpdateManyMutationInput, CurtidaComentarioUncheckedUpdateManyInput>
    /**
     * Filter which CurtidaComentarios to update
     */
    where?: CurtidaComentarioWhereInput
    /**
     * Limit how many CurtidaComentarios to update.
     */
    limit?: number
  }

  /**
   * CurtidaComentario updateManyAndReturn
   */
  export type CurtidaComentarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaComentario
     */
    select?: CurtidaComentarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaComentario
     */
    omit?: CurtidaComentarioOmit<ExtArgs> | null
    /**
     * The data used to update CurtidaComentarios.
     */
    data: XOR<CurtidaComentarioUpdateManyMutationInput, CurtidaComentarioUncheckedUpdateManyInput>
    /**
     * Filter which CurtidaComentarios to update
     */
    where?: CurtidaComentarioWhereInput
    /**
     * Limit how many CurtidaComentarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaComentarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CurtidaComentario upsert
   */
  export type CurtidaComentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaComentario
     */
    select?: CurtidaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaComentario
     */
    omit?: CurtidaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaComentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the CurtidaComentario to update in case it exists.
     */
    where: CurtidaComentarioWhereUniqueInput
    /**
     * In case the CurtidaComentario found by the `where` argument doesn't exist, create a new CurtidaComentario with this data.
     */
    create: XOR<CurtidaComentarioCreateInput, CurtidaComentarioUncheckedCreateInput>
    /**
     * In case the CurtidaComentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurtidaComentarioUpdateInput, CurtidaComentarioUncheckedUpdateInput>
  }

  /**
   * CurtidaComentario delete
   */
  export type CurtidaComentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaComentario
     */
    select?: CurtidaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaComentario
     */
    omit?: CurtidaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaComentarioInclude<ExtArgs> | null
    /**
     * Filter which CurtidaComentario to delete.
     */
    where: CurtidaComentarioWhereUniqueInput
  }

  /**
   * CurtidaComentario deleteMany
   */
  export type CurtidaComentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurtidaComentarios to delete
     */
    where?: CurtidaComentarioWhereInput
    /**
     * Limit how many CurtidaComentarios to delete.
     */
    limit?: number
  }

  /**
   * CurtidaComentario without action
   */
  export type CurtidaComentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurtidaComentario
     */
    select?: CurtidaComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurtidaComentario
     */
    omit?: CurtidaComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaComentarioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    conteudo: 'conteudo',
    usuarioId: 'usuarioId',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id: 'id',
    conteudo: 'conteudo',
    postId: 'postId',
    usuarioId: 'usuarioId',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


  export const CurtidaPostScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    postId: 'postId',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type CurtidaPostScalarFieldEnum = (typeof CurtidaPostScalarFieldEnum)[keyof typeof CurtidaPostScalarFieldEnum]


  export const CurtidaComentarioScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    comentarioId: 'comentarioId',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type CurtidaComentarioScalarFieldEnum = (typeof CurtidaComentarioScalarFieldEnum)[keyof typeof CurtidaComentarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Usuario"> | Date | string
    posts?: PostListRelationFilter
    comentarios?: ComentarioListRelationFilter
    curtidasPost?: CurtidaPostListRelationFilter
    curtidasComentario?: CurtidaComentarioListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    curtidasPost?: CurtidaPostOrderByRelationAggregateInput
    curtidasComentario?: CurtidaComentarioOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Usuario"> | Date | string
    posts?: PostListRelationFilter
    comentarios?: ComentarioListRelationFilter
    curtidasPost?: CurtidaPostListRelationFilter
    curtidasComentario?: CurtidaComentarioListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    conteudo?: StringFilter<"Post"> | string
    usuarioId?: IntFilter<"Post"> | number
    criadoEm?: DateTimeFilter<"Post"> | Date | string
    atualizadoEm?: DateTimeFilter<"Post"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    comentarios?: ComentarioListRelationFilter
    curtidas?: CurtidaPostListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    curtidas?: CurtidaPostOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    conteudo?: StringFilter<"Post"> | string
    usuarioId?: IntFilter<"Post"> | number
    criadoEm?: DateTimeFilter<"Post"> | Date | string
    atualizadoEm?: DateTimeFilter<"Post"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    comentarios?: ComentarioListRelationFilter
    curtidas?: CurtidaPostListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    conteudo?: StringWithAggregatesFilter<"Post"> | string
    usuarioId?: IntWithAggregatesFilter<"Post"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type ComentarioWhereInput = {
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    id?: IntFilter<"Comentario"> | number
    conteudo?: StringFilter<"Comentario"> | string
    postId?: IntFilter<"Comentario"> | number
    usuarioId?: IntFilter<"Comentario"> | number
    criadoEm?: DateTimeFilter<"Comentario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Comentario"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    curtidas?: CurtidaComentarioListRelationFilter
  }

  export type ComentarioOrderByWithRelationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    postId?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    post?: PostOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    curtidas?: CurtidaComentarioOrderByRelationAggregateInput
  }

  export type ComentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    conteudo?: StringFilter<"Comentario"> | string
    postId?: IntFilter<"Comentario"> | number
    usuarioId?: IntFilter<"Comentario"> | number
    criadoEm?: DateTimeFilter<"Comentario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Comentario"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    curtidas?: CurtidaComentarioListRelationFilter
  }, "id">

  export type ComentarioOrderByWithAggregationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    postId?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: ComentarioCountOrderByAggregateInput
    _avg?: ComentarioAvgOrderByAggregateInput
    _max?: ComentarioMaxOrderByAggregateInput
    _min?: ComentarioMinOrderByAggregateInput
    _sum?: ComentarioSumOrderByAggregateInput
  }

  export type ComentarioScalarWhereWithAggregatesInput = {
    AND?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    OR?: ComentarioScalarWhereWithAggregatesInput[]
    NOT?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comentario"> | number
    conteudo?: StringWithAggregatesFilter<"Comentario"> | string
    postId?: IntWithAggregatesFilter<"Comentario"> | number
    usuarioId?: IntWithAggregatesFilter<"Comentario"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"Comentario"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Comentario"> | Date | string
  }

  export type CurtidaPostWhereInput = {
    AND?: CurtidaPostWhereInput | CurtidaPostWhereInput[]
    OR?: CurtidaPostWhereInput[]
    NOT?: CurtidaPostWhereInput | CurtidaPostWhereInput[]
    id?: IntFilter<"CurtidaPost"> | number
    usuarioId?: IntFilter<"CurtidaPost"> | number
    postId?: IntFilter<"CurtidaPost"> | number
    criadoEm?: DateTimeFilter<"CurtidaPost"> | Date | string
    atualizadoEm?: DateTimeFilter<"CurtidaPost"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type CurtidaPostOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    postId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type CurtidaPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_postId?: CurtidaPostUsuarioIdPostIdCompoundUniqueInput
    AND?: CurtidaPostWhereInput | CurtidaPostWhereInput[]
    OR?: CurtidaPostWhereInput[]
    NOT?: CurtidaPostWhereInput | CurtidaPostWhereInput[]
    usuarioId?: IntFilter<"CurtidaPost"> | number
    postId?: IntFilter<"CurtidaPost"> | number
    criadoEm?: DateTimeFilter<"CurtidaPost"> | Date | string
    atualizadoEm?: DateTimeFilter<"CurtidaPost"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "usuarioId_postId">

  export type CurtidaPostOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    postId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: CurtidaPostCountOrderByAggregateInput
    _avg?: CurtidaPostAvgOrderByAggregateInput
    _max?: CurtidaPostMaxOrderByAggregateInput
    _min?: CurtidaPostMinOrderByAggregateInput
    _sum?: CurtidaPostSumOrderByAggregateInput
  }

  export type CurtidaPostScalarWhereWithAggregatesInput = {
    AND?: CurtidaPostScalarWhereWithAggregatesInput | CurtidaPostScalarWhereWithAggregatesInput[]
    OR?: CurtidaPostScalarWhereWithAggregatesInput[]
    NOT?: CurtidaPostScalarWhereWithAggregatesInput | CurtidaPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CurtidaPost"> | number
    usuarioId?: IntWithAggregatesFilter<"CurtidaPost"> | number
    postId?: IntWithAggregatesFilter<"CurtidaPost"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"CurtidaPost"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"CurtidaPost"> | Date | string
  }

  export type CurtidaComentarioWhereInput = {
    AND?: CurtidaComentarioWhereInput | CurtidaComentarioWhereInput[]
    OR?: CurtidaComentarioWhereInput[]
    NOT?: CurtidaComentarioWhereInput | CurtidaComentarioWhereInput[]
    id?: IntFilter<"CurtidaComentario"> | number
    usuarioId?: IntFilter<"CurtidaComentario"> | number
    comentarioId?: IntFilter<"CurtidaComentario"> | number
    criadoEm?: DateTimeFilter<"CurtidaComentario"> | Date | string
    atualizadoEm?: DateTimeFilter<"CurtidaComentario"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    comentario?: XOR<ComentarioScalarRelationFilter, ComentarioWhereInput>
  }

  export type CurtidaComentarioOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    comentarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    comentario?: ComentarioOrderByWithRelationInput
  }

  export type CurtidaComentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_comentarioId?: CurtidaComentarioUsuarioIdComentarioIdCompoundUniqueInput
    AND?: CurtidaComentarioWhereInput | CurtidaComentarioWhereInput[]
    OR?: CurtidaComentarioWhereInput[]
    NOT?: CurtidaComentarioWhereInput | CurtidaComentarioWhereInput[]
    usuarioId?: IntFilter<"CurtidaComentario"> | number
    comentarioId?: IntFilter<"CurtidaComentario"> | number
    criadoEm?: DateTimeFilter<"CurtidaComentario"> | Date | string
    atualizadoEm?: DateTimeFilter<"CurtidaComentario"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    comentario?: XOR<ComentarioScalarRelationFilter, ComentarioWhereInput>
  }, "id" | "usuarioId_comentarioId">

  export type CurtidaComentarioOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    comentarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: CurtidaComentarioCountOrderByAggregateInput
    _avg?: CurtidaComentarioAvgOrderByAggregateInput
    _max?: CurtidaComentarioMaxOrderByAggregateInput
    _min?: CurtidaComentarioMinOrderByAggregateInput
    _sum?: CurtidaComentarioSumOrderByAggregateInput
  }

  export type CurtidaComentarioScalarWhereWithAggregatesInput = {
    AND?: CurtidaComentarioScalarWhereWithAggregatesInput | CurtidaComentarioScalarWhereWithAggregatesInput[]
    OR?: CurtidaComentarioScalarWhereWithAggregatesInput[]
    NOT?: CurtidaComentarioScalarWhereWithAggregatesInput | CurtidaComentarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CurtidaComentario"> | number
    usuarioId?: IntWithAggregatesFilter<"CurtidaComentario"> | number
    comentarioId?: IntWithAggregatesFilter<"CurtidaComentario"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"CurtidaComentario"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"CurtidaComentario"> | Date | string
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    posts?: PostCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    curtidasPost?: CurtidaPostCreateNestedManyWithoutUsuarioInput
    curtidasComentario?: CurtidaComentarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    curtidasPost?: CurtidaPostUncheckedCreateNestedManyWithoutUsuarioInput
    curtidasComentario?: CurtidaComentarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    curtidasPost?: CurtidaPostUpdateManyWithoutUsuarioNestedInput
    curtidasComentario?: CurtidaComentarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    curtidasPost?: CurtidaPostUncheckedUpdateManyWithoutUsuarioNestedInput
    curtidasComentario?: CurtidaComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPostsInput
    comentarios?: ComentarioCreateNestedManyWithoutPostInput
    curtidas?: CurtidaPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    conteudo: string
    usuarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPostInput
    curtidas?: CurtidaPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
    comentarios?: ComentarioUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: ComentarioUncheckedUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    conteudo: string
    usuarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioCreateInput = {
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    post: PostCreateNestedOneWithoutComentariosInput
    usuario: UsuarioCreateNestedOneWithoutComentariosInput
    curtidas?: CurtidaComentarioCreateNestedManyWithoutComentarioInput
  }

  export type ComentarioUncheckedCreateInput = {
    id?: number
    conteudo: string
    postId: number
    usuarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    curtidas?: CurtidaComentarioUncheckedCreateNestedManyWithoutComentarioInput
  }

  export type ComentarioUpdateInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutComentariosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
    curtidas?: CurtidaComentarioUpdateManyWithoutComentarioNestedInput
  }

  export type ComentarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: CurtidaComentarioUncheckedUpdateManyWithoutComentarioNestedInput
  }

  export type ComentarioCreateManyInput = {
    id?: number
    conteudo: string
    postId: number
    usuarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ComentarioUpdateManyMutationInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurtidaPostCreateInput = {
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCurtidasPostInput
    post: PostCreateNestedOneWithoutCurtidasInput
  }

  export type CurtidaPostUncheckedCreateInput = {
    id?: number
    usuarioId: number
    postId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type CurtidaPostUpdateInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCurtidasPostNestedInput
    post?: PostUpdateOneRequiredWithoutCurtidasNestedInput
  }

  export type CurtidaPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurtidaPostCreateManyInput = {
    id?: number
    usuarioId: number
    postId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type CurtidaPostUpdateManyMutationInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurtidaPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurtidaComentarioCreateInput = {
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCurtidasComentarioInput
    comentario: ComentarioCreateNestedOneWithoutCurtidasInput
  }

  export type CurtidaComentarioUncheckedCreateInput = {
    id?: number
    usuarioId: number
    comentarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type CurtidaComentarioUpdateInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCurtidasComentarioNestedInput
    comentario?: ComentarioUpdateOneRequiredWithoutCurtidasNestedInput
  }

  export type CurtidaComentarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    comentarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurtidaComentarioCreateManyInput = {
    id?: number
    usuarioId: number
    comentarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type CurtidaComentarioUpdateManyMutationInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurtidaComentarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    comentarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type ComentarioListRelationFilter = {
    every?: ComentarioWhereInput
    some?: ComentarioWhereInput
    none?: ComentarioWhereInput
  }

  export type CurtidaPostListRelationFilter = {
    every?: CurtidaPostWhereInput
    some?: CurtidaPostWhereInput
    none?: CurtidaPostWhereInput
  }

  export type CurtidaComentarioListRelationFilter = {
    every?: CurtidaComentarioWhereInput
    some?: CurtidaComentarioWhereInput
    none?: CurtidaComentarioWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurtidaPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurtidaComentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type ComentarioCountOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    postId?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ComentarioAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ComentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    postId?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ComentarioMinOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    postId?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ComentarioSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    usuarioId?: SortOrder
  }

  export type CurtidaPostUsuarioIdPostIdCompoundUniqueInput = {
    usuarioId: number
    postId: number
  }

  export type CurtidaPostCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    postId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type CurtidaPostAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    postId?: SortOrder
  }

  export type CurtidaPostMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    postId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type CurtidaPostMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    postId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type CurtidaPostSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    postId?: SortOrder
  }

  export type ComentarioScalarRelationFilter = {
    is?: ComentarioWhereInput
    isNot?: ComentarioWhereInput
  }

  export type CurtidaComentarioUsuarioIdComentarioIdCompoundUniqueInput = {
    usuarioId: number
    comentarioId: number
  }

  export type CurtidaComentarioCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    comentarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type CurtidaComentarioAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    comentarioId?: SortOrder
  }

  export type CurtidaComentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    comentarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type CurtidaComentarioMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    comentarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type CurtidaComentarioSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    comentarioId?: SortOrder
  }

  export type PostCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PostCreateWithoutUsuarioInput, PostUncheckedCreateWithoutUsuarioInput> | PostCreateWithoutUsuarioInput[] | PostUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUsuarioInput | PostCreateOrConnectWithoutUsuarioInput[]
    createMany?: PostCreateManyUsuarioInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput> | ComentarioCreateWithoutUsuarioInput[] | ComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUsuarioInput | ComentarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: ComentarioCreateManyUsuarioInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type CurtidaPostCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CurtidaPostCreateWithoutUsuarioInput, CurtidaPostUncheckedCreateWithoutUsuarioInput> | CurtidaPostCreateWithoutUsuarioInput[] | CurtidaPostUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CurtidaPostCreateOrConnectWithoutUsuarioInput | CurtidaPostCreateOrConnectWithoutUsuarioInput[]
    createMany?: CurtidaPostCreateManyUsuarioInputEnvelope
    connect?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
  }

  export type CurtidaComentarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CurtidaComentarioCreateWithoutUsuarioInput, CurtidaComentarioUncheckedCreateWithoutUsuarioInput> | CurtidaComentarioCreateWithoutUsuarioInput[] | CurtidaComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CurtidaComentarioCreateOrConnectWithoutUsuarioInput | CurtidaComentarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: CurtidaComentarioCreateManyUsuarioInputEnvelope
    connect?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PostCreateWithoutUsuarioInput, PostUncheckedCreateWithoutUsuarioInput> | PostCreateWithoutUsuarioInput[] | PostUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUsuarioInput | PostCreateOrConnectWithoutUsuarioInput[]
    createMany?: PostCreateManyUsuarioInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput> | ComentarioCreateWithoutUsuarioInput[] | ComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUsuarioInput | ComentarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: ComentarioCreateManyUsuarioInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type CurtidaPostUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CurtidaPostCreateWithoutUsuarioInput, CurtidaPostUncheckedCreateWithoutUsuarioInput> | CurtidaPostCreateWithoutUsuarioInput[] | CurtidaPostUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CurtidaPostCreateOrConnectWithoutUsuarioInput | CurtidaPostCreateOrConnectWithoutUsuarioInput[]
    createMany?: CurtidaPostCreateManyUsuarioInputEnvelope
    connect?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
  }

  export type CurtidaComentarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CurtidaComentarioCreateWithoutUsuarioInput, CurtidaComentarioUncheckedCreateWithoutUsuarioInput> | CurtidaComentarioCreateWithoutUsuarioInput[] | CurtidaComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CurtidaComentarioCreateOrConnectWithoutUsuarioInput | CurtidaComentarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: CurtidaComentarioCreateManyUsuarioInputEnvelope
    connect?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PostCreateWithoutUsuarioInput, PostUncheckedCreateWithoutUsuarioInput> | PostCreateWithoutUsuarioInput[] | PostUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUsuarioInput | PostCreateOrConnectWithoutUsuarioInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUsuarioInput | PostUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PostCreateManyUsuarioInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUsuarioInput | PostUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUsuarioInput | PostUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput> | ComentarioCreateWithoutUsuarioInput[] | ComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUsuarioInput | ComentarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutUsuarioInput | ComentarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ComentarioCreateManyUsuarioInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutUsuarioInput | ComentarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutUsuarioInput | ComentarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type CurtidaPostUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CurtidaPostCreateWithoutUsuarioInput, CurtidaPostUncheckedCreateWithoutUsuarioInput> | CurtidaPostCreateWithoutUsuarioInput[] | CurtidaPostUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CurtidaPostCreateOrConnectWithoutUsuarioInput | CurtidaPostCreateOrConnectWithoutUsuarioInput[]
    upsert?: CurtidaPostUpsertWithWhereUniqueWithoutUsuarioInput | CurtidaPostUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CurtidaPostCreateManyUsuarioInputEnvelope
    set?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
    disconnect?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
    delete?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
    connect?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
    update?: CurtidaPostUpdateWithWhereUniqueWithoutUsuarioInput | CurtidaPostUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CurtidaPostUpdateManyWithWhereWithoutUsuarioInput | CurtidaPostUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CurtidaPostScalarWhereInput | CurtidaPostScalarWhereInput[]
  }

  export type CurtidaComentarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CurtidaComentarioCreateWithoutUsuarioInput, CurtidaComentarioUncheckedCreateWithoutUsuarioInput> | CurtidaComentarioCreateWithoutUsuarioInput[] | CurtidaComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CurtidaComentarioCreateOrConnectWithoutUsuarioInput | CurtidaComentarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: CurtidaComentarioUpsertWithWhereUniqueWithoutUsuarioInput | CurtidaComentarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CurtidaComentarioCreateManyUsuarioInputEnvelope
    set?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
    disconnect?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
    delete?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
    connect?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
    update?: CurtidaComentarioUpdateWithWhereUniqueWithoutUsuarioInput | CurtidaComentarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CurtidaComentarioUpdateManyWithWhereWithoutUsuarioInput | CurtidaComentarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CurtidaComentarioScalarWhereInput | CurtidaComentarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PostCreateWithoutUsuarioInput, PostUncheckedCreateWithoutUsuarioInput> | PostCreateWithoutUsuarioInput[] | PostUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUsuarioInput | PostCreateOrConnectWithoutUsuarioInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUsuarioInput | PostUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PostCreateManyUsuarioInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUsuarioInput | PostUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUsuarioInput | PostUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput> | ComentarioCreateWithoutUsuarioInput[] | ComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUsuarioInput | ComentarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutUsuarioInput | ComentarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ComentarioCreateManyUsuarioInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutUsuarioInput | ComentarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutUsuarioInput | ComentarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type CurtidaPostUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CurtidaPostCreateWithoutUsuarioInput, CurtidaPostUncheckedCreateWithoutUsuarioInput> | CurtidaPostCreateWithoutUsuarioInput[] | CurtidaPostUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CurtidaPostCreateOrConnectWithoutUsuarioInput | CurtidaPostCreateOrConnectWithoutUsuarioInput[]
    upsert?: CurtidaPostUpsertWithWhereUniqueWithoutUsuarioInput | CurtidaPostUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CurtidaPostCreateManyUsuarioInputEnvelope
    set?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
    disconnect?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
    delete?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
    connect?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
    update?: CurtidaPostUpdateWithWhereUniqueWithoutUsuarioInput | CurtidaPostUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CurtidaPostUpdateManyWithWhereWithoutUsuarioInput | CurtidaPostUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CurtidaPostScalarWhereInput | CurtidaPostScalarWhereInput[]
  }

  export type CurtidaComentarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CurtidaComentarioCreateWithoutUsuarioInput, CurtidaComentarioUncheckedCreateWithoutUsuarioInput> | CurtidaComentarioCreateWithoutUsuarioInput[] | CurtidaComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CurtidaComentarioCreateOrConnectWithoutUsuarioInput | CurtidaComentarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: CurtidaComentarioUpsertWithWhereUniqueWithoutUsuarioInput | CurtidaComentarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CurtidaComentarioCreateManyUsuarioInputEnvelope
    set?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
    disconnect?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
    delete?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
    connect?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
    update?: CurtidaComentarioUpdateWithWhereUniqueWithoutUsuarioInput | CurtidaComentarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CurtidaComentarioUpdateManyWithWhereWithoutUsuarioInput | CurtidaComentarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CurtidaComentarioScalarWhereInput | CurtidaComentarioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPostsInput = {
    create?: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPostsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ComentarioCreateNestedManyWithoutPostInput = {
    create?: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput> | ComentarioCreateWithoutPostInput[] | ComentarioUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPostInput | ComentarioCreateOrConnectWithoutPostInput[]
    createMany?: ComentarioCreateManyPostInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type CurtidaPostCreateNestedManyWithoutPostInput = {
    create?: XOR<CurtidaPostCreateWithoutPostInput, CurtidaPostUncheckedCreateWithoutPostInput> | CurtidaPostCreateWithoutPostInput[] | CurtidaPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CurtidaPostCreateOrConnectWithoutPostInput | CurtidaPostCreateOrConnectWithoutPostInput[]
    createMany?: CurtidaPostCreateManyPostInputEnvelope
    connect?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput> | ComentarioCreateWithoutPostInput[] | ComentarioUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPostInput | ComentarioCreateOrConnectWithoutPostInput[]
    createMany?: ComentarioCreateManyPostInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type CurtidaPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CurtidaPostCreateWithoutPostInput, CurtidaPostUncheckedCreateWithoutPostInput> | CurtidaPostCreateWithoutPostInput[] | CurtidaPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CurtidaPostCreateOrConnectWithoutPostInput | CurtidaPostCreateOrConnectWithoutPostInput[]
    createMany?: CurtidaPostCreateManyPostInputEnvelope
    connect?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPostsInput
    upsert?: UsuarioUpsertWithoutPostsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPostsInput, UsuarioUpdateWithoutPostsInput>, UsuarioUncheckedUpdateWithoutPostsInput>
  }

  export type ComentarioUpdateManyWithoutPostNestedInput = {
    create?: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput> | ComentarioCreateWithoutPostInput[] | ComentarioUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPostInput | ComentarioCreateOrConnectWithoutPostInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutPostInput | ComentarioUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ComentarioCreateManyPostInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutPostInput | ComentarioUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutPostInput | ComentarioUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type CurtidaPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<CurtidaPostCreateWithoutPostInput, CurtidaPostUncheckedCreateWithoutPostInput> | CurtidaPostCreateWithoutPostInput[] | CurtidaPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CurtidaPostCreateOrConnectWithoutPostInput | CurtidaPostCreateOrConnectWithoutPostInput[]
    upsert?: CurtidaPostUpsertWithWhereUniqueWithoutPostInput | CurtidaPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CurtidaPostCreateManyPostInputEnvelope
    set?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
    disconnect?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
    delete?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
    connect?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
    update?: CurtidaPostUpdateWithWhereUniqueWithoutPostInput | CurtidaPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CurtidaPostUpdateManyWithWhereWithoutPostInput | CurtidaPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CurtidaPostScalarWhereInput | CurtidaPostScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput> | ComentarioCreateWithoutPostInput[] | ComentarioUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPostInput | ComentarioCreateOrConnectWithoutPostInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutPostInput | ComentarioUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ComentarioCreateManyPostInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutPostInput | ComentarioUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutPostInput | ComentarioUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type CurtidaPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CurtidaPostCreateWithoutPostInput, CurtidaPostUncheckedCreateWithoutPostInput> | CurtidaPostCreateWithoutPostInput[] | CurtidaPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CurtidaPostCreateOrConnectWithoutPostInput | CurtidaPostCreateOrConnectWithoutPostInput[]
    upsert?: CurtidaPostUpsertWithWhereUniqueWithoutPostInput | CurtidaPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CurtidaPostCreateManyPostInputEnvelope
    set?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
    disconnect?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
    delete?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
    connect?: CurtidaPostWhereUniqueInput | CurtidaPostWhereUniqueInput[]
    update?: CurtidaPostUpdateWithWhereUniqueWithoutPostInput | CurtidaPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CurtidaPostUpdateManyWithWhereWithoutPostInput | CurtidaPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CurtidaPostScalarWhereInput | CurtidaPostScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutComentariosInput = {
    create?: XOR<PostCreateWithoutComentariosInput, PostUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: PostCreateOrConnectWithoutComentariosInput
    connect?: PostWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutComentariosInput = {
    create?: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComentariosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CurtidaComentarioCreateNestedManyWithoutComentarioInput = {
    create?: XOR<CurtidaComentarioCreateWithoutComentarioInput, CurtidaComentarioUncheckedCreateWithoutComentarioInput> | CurtidaComentarioCreateWithoutComentarioInput[] | CurtidaComentarioUncheckedCreateWithoutComentarioInput[]
    connectOrCreate?: CurtidaComentarioCreateOrConnectWithoutComentarioInput | CurtidaComentarioCreateOrConnectWithoutComentarioInput[]
    createMany?: CurtidaComentarioCreateManyComentarioInputEnvelope
    connect?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
  }

  export type CurtidaComentarioUncheckedCreateNestedManyWithoutComentarioInput = {
    create?: XOR<CurtidaComentarioCreateWithoutComentarioInput, CurtidaComentarioUncheckedCreateWithoutComentarioInput> | CurtidaComentarioCreateWithoutComentarioInput[] | CurtidaComentarioUncheckedCreateWithoutComentarioInput[]
    connectOrCreate?: CurtidaComentarioCreateOrConnectWithoutComentarioInput | CurtidaComentarioCreateOrConnectWithoutComentarioInput[]
    createMany?: CurtidaComentarioCreateManyComentarioInputEnvelope
    connect?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
  }

  export type PostUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<PostCreateWithoutComentariosInput, PostUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: PostCreateOrConnectWithoutComentariosInput
    upsert?: PostUpsertWithoutComentariosInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutComentariosInput, PostUpdateWithoutComentariosInput>, PostUncheckedUpdateWithoutComentariosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComentariosInput
    upsert?: UsuarioUpsertWithoutComentariosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutComentariosInput, UsuarioUpdateWithoutComentariosInput>, UsuarioUncheckedUpdateWithoutComentariosInput>
  }

  export type CurtidaComentarioUpdateManyWithoutComentarioNestedInput = {
    create?: XOR<CurtidaComentarioCreateWithoutComentarioInput, CurtidaComentarioUncheckedCreateWithoutComentarioInput> | CurtidaComentarioCreateWithoutComentarioInput[] | CurtidaComentarioUncheckedCreateWithoutComentarioInput[]
    connectOrCreate?: CurtidaComentarioCreateOrConnectWithoutComentarioInput | CurtidaComentarioCreateOrConnectWithoutComentarioInput[]
    upsert?: CurtidaComentarioUpsertWithWhereUniqueWithoutComentarioInput | CurtidaComentarioUpsertWithWhereUniqueWithoutComentarioInput[]
    createMany?: CurtidaComentarioCreateManyComentarioInputEnvelope
    set?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
    disconnect?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
    delete?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
    connect?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
    update?: CurtidaComentarioUpdateWithWhereUniqueWithoutComentarioInput | CurtidaComentarioUpdateWithWhereUniqueWithoutComentarioInput[]
    updateMany?: CurtidaComentarioUpdateManyWithWhereWithoutComentarioInput | CurtidaComentarioUpdateManyWithWhereWithoutComentarioInput[]
    deleteMany?: CurtidaComentarioScalarWhereInput | CurtidaComentarioScalarWhereInput[]
  }

  export type CurtidaComentarioUncheckedUpdateManyWithoutComentarioNestedInput = {
    create?: XOR<CurtidaComentarioCreateWithoutComentarioInput, CurtidaComentarioUncheckedCreateWithoutComentarioInput> | CurtidaComentarioCreateWithoutComentarioInput[] | CurtidaComentarioUncheckedCreateWithoutComentarioInput[]
    connectOrCreate?: CurtidaComentarioCreateOrConnectWithoutComentarioInput | CurtidaComentarioCreateOrConnectWithoutComentarioInput[]
    upsert?: CurtidaComentarioUpsertWithWhereUniqueWithoutComentarioInput | CurtidaComentarioUpsertWithWhereUniqueWithoutComentarioInput[]
    createMany?: CurtidaComentarioCreateManyComentarioInputEnvelope
    set?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
    disconnect?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
    delete?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
    connect?: CurtidaComentarioWhereUniqueInput | CurtidaComentarioWhereUniqueInput[]
    update?: CurtidaComentarioUpdateWithWhereUniqueWithoutComentarioInput | CurtidaComentarioUpdateWithWhereUniqueWithoutComentarioInput[]
    updateMany?: CurtidaComentarioUpdateManyWithWhereWithoutComentarioInput | CurtidaComentarioUpdateManyWithWhereWithoutComentarioInput[]
    deleteMany?: CurtidaComentarioScalarWhereInput | CurtidaComentarioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutCurtidasPostInput = {
    create?: XOR<UsuarioCreateWithoutCurtidasPostInput, UsuarioUncheckedCreateWithoutCurtidasPostInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCurtidasPostInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutCurtidasInput = {
    create?: XOR<PostCreateWithoutCurtidasInput, PostUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: PostCreateOrConnectWithoutCurtidasInput
    connect?: PostWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutCurtidasPostNestedInput = {
    create?: XOR<UsuarioCreateWithoutCurtidasPostInput, UsuarioUncheckedCreateWithoutCurtidasPostInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCurtidasPostInput
    upsert?: UsuarioUpsertWithoutCurtidasPostInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCurtidasPostInput, UsuarioUpdateWithoutCurtidasPostInput>, UsuarioUncheckedUpdateWithoutCurtidasPostInput>
  }

  export type PostUpdateOneRequiredWithoutCurtidasNestedInput = {
    create?: XOR<PostCreateWithoutCurtidasInput, PostUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: PostCreateOrConnectWithoutCurtidasInput
    upsert?: PostUpsertWithoutCurtidasInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCurtidasInput, PostUpdateWithoutCurtidasInput>, PostUncheckedUpdateWithoutCurtidasInput>
  }

  export type UsuarioCreateNestedOneWithoutCurtidasComentarioInput = {
    create?: XOR<UsuarioCreateWithoutCurtidasComentarioInput, UsuarioUncheckedCreateWithoutCurtidasComentarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCurtidasComentarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ComentarioCreateNestedOneWithoutCurtidasInput = {
    create?: XOR<ComentarioCreateWithoutCurtidasInput, ComentarioUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: ComentarioCreateOrConnectWithoutCurtidasInput
    connect?: ComentarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutCurtidasComentarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutCurtidasComentarioInput, UsuarioUncheckedCreateWithoutCurtidasComentarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCurtidasComentarioInput
    upsert?: UsuarioUpsertWithoutCurtidasComentarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCurtidasComentarioInput, UsuarioUpdateWithoutCurtidasComentarioInput>, UsuarioUncheckedUpdateWithoutCurtidasComentarioInput>
  }

  export type ComentarioUpdateOneRequiredWithoutCurtidasNestedInput = {
    create?: XOR<ComentarioCreateWithoutCurtidasInput, ComentarioUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: ComentarioCreateOrConnectWithoutCurtidasInput
    upsert?: ComentarioUpsertWithoutCurtidasInput
    connect?: ComentarioWhereUniqueInput
    update?: XOR<XOR<ComentarioUpdateToOneWithWhereWithoutCurtidasInput, ComentarioUpdateWithoutCurtidasInput>, ComentarioUncheckedUpdateWithoutCurtidasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PostCreateWithoutUsuarioInput = {
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    comentarios?: ComentarioCreateNestedManyWithoutPostInput
    curtidas?: CurtidaPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUsuarioInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPostInput
    curtidas?: CurtidaPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUsuarioInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUsuarioInput, PostUncheckedCreateWithoutUsuarioInput>
  }

  export type PostCreateManyUsuarioInputEnvelope = {
    data: PostCreateManyUsuarioInput | PostCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ComentarioCreateWithoutUsuarioInput = {
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    post: PostCreateNestedOneWithoutComentariosInput
    curtidas?: CurtidaComentarioCreateNestedManyWithoutComentarioInput
  }

  export type ComentarioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    conteudo: string
    postId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    curtidas?: CurtidaComentarioUncheckedCreateNestedManyWithoutComentarioInput
  }

  export type ComentarioCreateOrConnectWithoutUsuarioInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput>
  }

  export type ComentarioCreateManyUsuarioInputEnvelope = {
    data: ComentarioCreateManyUsuarioInput | ComentarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CurtidaPostCreateWithoutUsuarioInput = {
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    post: PostCreateNestedOneWithoutCurtidasInput
  }

  export type CurtidaPostUncheckedCreateWithoutUsuarioInput = {
    id?: number
    postId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type CurtidaPostCreateOrConnectWithoutUsuarioInput = {
    where: CurtidaPostWhereUniqueInput
    create: XOR<CurtidaPostCreateWithoutUsuarioInput, CurtidaPostUncheckedCreateWithoutUsuarioInput>
  }

  export type CurtidaPostCreateManyUsuarioInputEnvelope = {
    data: CurtidaPostCreateManyUsuarioInput | CurtidaPostCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CurtidaComentarioCreateWithoutUsuarioInput = {
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    comentario: ComentarioCreateNestedOneWithoutCurtidasInput
  }

  export type CurtidaComentarioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    comentarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type CurtidaComentarioCreateOrConnectWithoutUsuarioInput = {
    where: CurtidaComentarioWhereUniqueInput
    create: XOR<CurtidaComentarioCreateWithoutUsuarioInput, CurtidaComentarioUncheckedCreateWithoutUsuarioInput>
  }

  export type CurtidaComentarioCreateManyUsuarioInputEnvelope = {
    data: CurtidaComentarioCreateManyUsuarioInput | CurtidaComentarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUsuarioInput, PostUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PostCreateWithoutUsuarioInput, PostUncheckedCreateWithoutUsuarioInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUsuarioInput, PostUncheckedUpdateWithoutUsuarioInput>
  }

  export type PostUpdateManyWithWhereWithoutUsuarioInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    conteudo?: StringFilter<"Post"> | string
    usuarioId?: IntFilter<"Post"> | number
    criadoEm?: DateTimeFilter<"Post"> | Date | string
    atualizadoEm?: DateTimeFilter<"Post"> | Date | string
  }

  export type ComentarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutUsuarioInput, ComentarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutUsuarioInput, ComentarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ComentarioScalarWhereInput = {
    AND?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    OR?: ComentarioScalarWhereInput[]
    NOT?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    id?: IntFilter<"Comentario"> | number
    conteudo?: StringFilter<"Comentario"> | string
    postId?: IntFilter<"Comentario"> | number
    usuarioId?: IntFilter<"Comentario"> | number
    criadoEm?: DateTimeFilter<"Comentario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Comentario"> | Date | string
  }

  export type CurtidaPostUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CurtidaPostWhereUniqueInput
    update: XOR<CurtidaPostUpdateWithoutUsuarioInput, CurtidaPostUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CurtidaPostCreateWithoutUsuarioInput, CurtidaPostUncheckedCreateWithoutUsuarioInput>
  }

  export type CurtidaPostUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CurtidaPostWhereUniqueInput
    data: XOR<CurtidaPostUpdateWithoutUsuarioInput, CurtidaPostUncheckedUpdateWithoutUsuarioInput>
  }

  export type CurtidaPostUpdateManyWithWhereWithoutUsuarioInput = {
    where: CurtidaPostScalarWhereInput
    data: XOR<CurtidaPostUpdateManyMutationInput, CurtidaPostUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CurtidaPostScalarWhereInput = {
    AND?: CurtidaPostScalarWhereInput | CurtidaPostScalarWhereInput[]
    OR?: CurtidaPostScalarWhereInput[]
    NOT?: CurtidaPostScalarWhereInput | CurtidaPostScalarWhereInput[]
    id?: IntFilter<"CurtidaPost"> | number
    usuarioId?: IntFilter<"CurtidaPost"> | number
    postId?: IntFilter<"CurtidaPost"> | number
    criadoEm?: DateTimeFilter<"CurtidaPost"> | Date | string
    atualizadoEm?: DateTimeFilter<"CurtidaPost"> | Date | string
  }

  export type CurtidaComentarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CurtidaComentarioWhereUniqueInput
    update: XOR<CurtidaComentarioUpdateWithoutUsuarioInput, CurtidaComentarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CurtidaComentarioCreateWithoutUsuarioInput, CurtidaComentarioUncheckedCreateWithoutUsuarioInput>
  }

  export type CurtidaComentarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CurtidaComentarioWhereUniqueInput
    data: XOR<CurtidaComentarioUpdateWithoutUsuarioInput, CurtidaComentarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type CurtidaComentarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: CurtidaComentarioScalarWhereInput
    data: XOR<CurtidaComentarioUpdateManyMutationInput, CurtidaComentarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CurtidaComentarioScalarWhereInput = {
    AND?: CurtidaComentarioScalarWhereInput | CurtidaComentarioScalarWhereInput[]
    OR?: CurtidaComentarioScalarWhereInput[]
    NOT?: CurtidaComentarioScalarWhereInput | CurtidaComentarioScalarWhereInput[]
    id?: IntFilter<"CurtidaComentario"> | number
    usuarioId?: IntFilter<"CurtidaComentario"> | number
    comentarioId?: IntFilter<"CurtidaComentario"> | number
    criadoEm?: DateTimeFilter<"CurtidaComentario"> | Date | string
    atualizadoEm?: DateTimeFilter<"CurtidaComentario"> | Date | string
  }

  export type UsuarioCreateWithoutPostsInput = {
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    curtidasPost?: CurtidaPostCreateNestedManyWithoutUsuarioInput
    curtidasComentario?: CurtidaComentarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPostsInput = {
    id?: number
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    curtidasPost?: CurtidaPostUncheckedCreateNestedManyWithoutUsuarioInput
    curtidasComentario?: CurtidaComentarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPostsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
  }

  export type ComentarioCreateWithoutPostInput = {
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutComentariosInput
    curtidas?: CurtidaComentarioCreateNestedManyWithoutComentarioInput
  }

  export type ComentarioUncheckedCreateWithoutPostInput = {
    id?: number
    conteudo: string
    usuarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    curtidas?: CurtidaComentarioUncheckedCreateNestedManyWithoutComentarioInput
  }

  export type ComentarioCreateOrConnectWithoutPostInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput>
  }

  export type ComentarioCreateManyPostInputEnvelope = {
    data: ComentarioCreateManyPostInput | ComentarioCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type CurtidaPostCreateWithoutPostInput = {
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCurtidasPostInput
  }

  export type CurtidaPostUncheckedCreateWithoutPostInput = {
    id?: number
    usuarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type CurtidaPostCreateOrConnectWithoutPostInput = {
    where: CurtidaPostWhereUniqueInput
    create: XOR<CurtidaPostCreateWithoutPostInput, CurtidaPostUncheckedCreateWithoutPostInput>
  }

  export type CurtidaPostCreateManyPostInputEnvelope = {
    data: CurtidaPostCreateManyPostInput | CurtidaPostCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutPostsInput = {
    update: XOR<UsuarioUpdateWithoutPostsInput, UsuarioUncheckedUpdateWithoutPostsInput>
    create: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPostsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPostsInput, UsuarioUncheckedUpdateWithoutPostsInput>
  }

  export type UsuarioUpdateWithoutPostsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    curtidasPost?: CurtidaPostUpdateManyWithoutUsuarioNestedInput
    curtidasComentario?: CurtidaComentarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    curtidasPost?: CurtidaPostUncheckedUpdateManyWithoutUsuarioNestedInput
    curtidasComentario?: CurtidaComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ComentarioUpsertWithWhereUniqueWithoutPostInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutPostInput, ComentarioUncheckedUpdateWithoutPostInput>
    create: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutPostInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutPostInput, ComentarioUncheckedUpdateWithoutPostInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutPostInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutPostInput>
  }

  export type CurtidaPostUpsertWithWhereUniqueWithoutPostInput = {
    where: CurtidaPostWhereUniqueInput
    update: XOR<CurtidaPostUpdateWithoutPostInput, CurtidaPostUncheckedUpdateWithoutPostInput>
    create: XOR<CurtidaPostCreateWithoutPostInput, CurtidaPostUncheckedCreateWithoutPostInput>
  }

  export type CurtidaPostUpdateWithWhereUniqueWithoutPostInput = {
    where: CurtidaPostWhereUniqueInput
    data: XOR<CurtidaPostUpdateWithoutPostInput, CurtidaPostUncheckedUpdateWithoutPostInput>
  }

  export type CurtidaPostUpdateManyWithWhereWithoutPostInput = {
    where: CurtidaPostScalarWhereInput
    data: XOR<CurtidaPostUpdateManyMutationInput, CurtidaPostUncheckedUpdateManyWithoutPostInput>
  }

  export type PostCreateWithoutComentariosInput = {
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPostsInput
    curtidas?: CurtidaPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutComentariosInput = {
    id?: number
    conteudo: string
    usuarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    curtidas?: CurtidaPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutComentariosInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutComentariosInput, PostUncheckedCreateWithoutComentariosInput>
  }

  export type UsuarioCreateWithoutComentariosInput = {
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    posts?: PostCreateNestedManyWithoutUsuarioInput
    curtidasPost?: CurtidaPostCreateNestedManyWithoutUsuarioInput
    curtidasComentario?: CurtidaComentarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutComentariosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUsuarioInput
    curtidasPost?: CurtidaPostUncheckedCreateNestedManyWithoutUsuarioInput
    curtidasComentario?: CurtidaComentarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutComentariosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
  }

  export type CurtidaComentarioCreateWithoutComentarioInput = {
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCurtidasComentarioInput
  }

  export type CurtidaComentarioUncheckedCreateWithoutComentarioInput = {
    id?: number
    usuarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type CurtidaComentarioCreateOrConnectWithoutComentarioInput = {
    where: CurtidaComentarioWhereUniqueInput
    create: XOR<CurtidaComentarioCreateWithoutComentarioInput, CurtidaComentarioUncheckedCreateWithoutComentarioInput>
  }

  export type CurtidaComentarioCreateManyComentarioInputEnvelope = {
    data: CurtidaComentarioCreateManyComentarioInput | CurtidaComentarioCreateManyComentarioInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithoutComentariosInput = {
    update: XOR<PostUpdateWithoutComentariosInput, PostUncheckedUpdateWithoutComentariosInput>
    create: XOR<PostCreateWithoutComentariosInput, PostUncheckedCreateWithoutComentariosInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutComentariosInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutComentariosInput, PostUncheckedUpdateWithoutComentariosInput>
  }

  export type PostUpdateWithoutComentariosInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
    curtidas?: CurtidaPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: CurtidaPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UsuarioUpsertWithoutComentariosInput = {
    update: XOR<UsuarioUpdateWithoutComentariosInput, UsuarioUncheckedUpdateWithoutComentariosInput>
    create: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutComentariosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutComentariosInput, UsuarioUncheckedUpdateWithoutComentariosInput>
  }

  export type UsuarioUpdateWithoutComentariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUsuarioNestedInput
    curtidasPost?: CurtidaPostUpdateManyWithoutUsuarioNestedInput
    curtidasComentario?: CurtidaComentarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUsuarioNestedInput
    curtidasPost?: CurtidaPostUncheckedUpdateManyWithoutUsuarioNestedInput
    curtidasComentario?: CurtidaComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CurtidaComentarioUpsertWithWhereUniqueWithoutComentarioInput = {
    where: CurtidaComentarioWhereUniqueInput
    update: XOR<CurtidaComentarioUpdateWithoutComentarioInput, CurtidaComentarioUncheckedUpdateWithoutComentarioInput>
    create: XOR<CurtidaComentarioCreateWithoutComentarioInput, CurtidaComentarioUncheckedCreateWithoutComentarioInput>
  }

  export type CurtidaComentarioUpdateWithWhereUniqueWithoutComentarioInput = {
    where: CurtidaComentarioWhereUniqueInput
    data: XOR<CurtidaComentarioUpdateWithoutComentarioInput, CurtidaComentarioUncheckedUpdateWithoutComentarioInput>
  }

  export type CurtidaComentarioUpdateManyWithWhereWithoutComentarioInput = {
    where: CurtidaComentarioScalarWhereInput
    data: XOR<CurtidaComentarioUpdateManyMutationInput, CurtidaComentarioUncheckedUpdateManyWithoutComentarioInput>
  }

  export type UsuarioCreateWithoutCurtidasPostInput = {
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    posts?: PostCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    curtidasComentario?: CurtidaComentarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCurtidasPostInput = {
    id?: number
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    curtidasComentario?: CurtidaComentarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCurtidasPostInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCurtidasPostInput, UsuarioUncheckedCreateWithoutCurtidasPostInput>
  }

  export type PostCreateWithoutCurtidasInput = {
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPostsInput
    comentarios?: ComentarioCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCurtidasInput = {
    id?: number
    conteudo: string
    usuarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCurtidasInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCurtidasInput, PostUncheckedCreateWithoutCurtidasInput>
  }

  export type UsuarioUpsertWithoutCurtidasPostInput = {
    update: XOR<UsuarioUpdateWithoutCurtidasPostInput, UsuarioUncheckedUpdateWithoutCurtidasPostInput>
    create: XOR<UsuarioCreateWithoutCurtidasPostInput, UsuarioUncheckedCreateWithoutCurtidasPostInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCurtidasPostInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCurtidasPostInput, UsuarioUncheckedUpdateWithoutCurtidasPostInput>
  }

  export type UsuarioUpdateWithoutCurtidasPostInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    curtidasComentario?: CurtidaComentarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCurtidasPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    curtidasComentario?: CurtidaComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PostUpsertWithoutCurtidasInput = {
    update: XOR<PostUpdateWithoutCurtidasInput, PostUncheckedUpdateWithoutCurtidasInput>
    create: XOR<PostCreateWithoutCurtidasInput, PostUncheckedCreateWithoutCurtidasInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCurtidasInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCurtidasInput, PostUncheckedUpdateWithoutCurtidasInput>
  }

  export type PostUpdateWithoutCurtidasInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
    comentarios?: ComentarioUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCurtidasInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: ComentarioUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UsuarioCreateWithoutCurtidasComentarioInput = {
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    posts?: PostCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    curtidasPost?: CurtidaPostCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCurtidasComentarioInput = {
    id?: number
    nome: string
    email: string
    senha: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUsuarioInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    curtidasPost?: CurtidaPostUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCurtidasComentarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCurtidasComentarioInput, UsuarioUncheckedCreateWithoutCurtidasComentarioInput>
  }

  export type ComentarioCreateWithoutCurtidasInput = {
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    post: PostCreateNestedOneWithoutComentariosInput
    usuario: UsuarioCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateWithoutCurtidasInput = {
    id?: number
    conteudo: string
    postId: number
    usuarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ComentarioCreateOrConnectWithoutCurtidasInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutCurtidasInput, ComentarioUncheckedCreateWithoutCurtidasInput>
  }

  export type UsuarioUpsertWithoutCurtidasComentarioInput = {
    update: XOR<UsuarioUpdateWithoutCurtidasComentarioInput, UsuarioUncheckedUpdateWithoutCurtidasComentarioInput>
    create: XOR<UsuarioCreateWithoutCurtidasComentarioInput, UsuarioUncheckedCreateWithoutCurtidasComentarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCurtidasComentarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCurtidasComentarioInput, UsuarioUncheckedUpdateWithoutCurtidasComentarioInput>
  }

  export type UsuarioUpdateWithoutCurtidasComentarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    curtidasPost?: CurtidaPostUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCurtidasComentarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUsuarioNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    curtidasPost?: CurtidaPostUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ComentarioUpsertWithoutCurtidasInput = {
    update: XOR<ComentarioUpdateWithoutCurtidasInput, ComentarioUncheckedUpdateWithoutCurtidasInput>
    create: XOR<ComentarioCreateWithoutCurtidasInput, ComentarioUncheckedCreateWithoutCurtidasInput>
    where?: ComentarioWhereInput
  }

  export type ComentarioUpdateToOneWithWhereWithoutCurtidasInput = {
    where?: ComentarioWhereInput
    data: XOR<ComentarioUpdateWithoutCurtidasInput, ComentarioUncheckedUpdateWithoutCurtidasInput>
  }

  export type ComentarioUpdateWithoutCurtidasInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutComentariosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutCurtidasInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyUsuarioInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ComentarioCreateManyUsuarioInput = {
    id?: number
    conteudo: string
    postId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type CurtidaPostCreateManyUsuarioInput = {
    id?: number
    postId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type CurtidaComentarioCreateManyUsuarioInput = {
    id?: number
    comentarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PostUpdateWithoutUsuarioInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: ComentarioUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: ComentarioUncheckedUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUpdateWithoutUsuarioInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutComentariosNestedInput
    curtidas?: CurtidaComentarioUpdateManyWithoutComentarioNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: CurtidaComentarioUncheckedUpdateManyWithoutComentarioNestedInput
  }

  export type ComentarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurtidaPostUpdateWithoutUsuarioInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCurtidasNestedInput
  }

  export type CurtidaPostUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurtidaPostUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurtidaComentarioUpdateWithoutUsuarioInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: ComentarioUpdateOneRequiredWithoutCurtidasNestedInput
  }

  export type CurtidaComentarioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    comentarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurtidaComentarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    comentarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioCreateManyPostInput = {
    id?: number
    conteudo: string
    usuarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type CurtidaPostCreateManyPostInput = {
    id?: number
    usuarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ComentarioUpdateWithoutPostInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
    curtidas?: CurtidaComentarioUpdateManyWithoutComentarioNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    curtidas?: CurtidaComentarioUncheckedUpdateManyWithoutComentarioNestedInput
  }

  export type ComentarioUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurtidaPostUpdateWithoutPostInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCurtidasPostNestedInput
  }

  export type CurtidaPostUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurtidaPostUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurtidaComentarioCreateManyComentarioInput = {
    id?: number
    usuarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type CurtidaComentarioUpdateWithoutComentarioInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCurtidasComentarioNestedInput
  }

  export type CurtidaComentarioUncheckedUpdateWithoutComentarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurtidaComentarioUncheckedUpdateManyWithoutComentarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}