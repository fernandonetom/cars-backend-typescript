import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import createConnection from '..';

async function create() {
  const connection = await createConnection();
  const id = uuidV4();
  const password = await hash('admin', 8);
  await connection.query(
    `INSERT INTO users(id, name, email, password, "isAdmin", driver_license)
    values('${id}', 'admin', 'admin@admin.com', '${password}', true, 'AAA-0000')
    `
  );
}

create()
  .then(() => console.log('Admin user created'))
  .catch(console.log);
