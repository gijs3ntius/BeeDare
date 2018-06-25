"""empty message

Revision ID: ab2faafd30a9
Revises: 82f899a4eaeb
Create Date: 2018-06-22 13:53:28.480817

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ab2faafd30a9'
down_revision = '82f899a4eaeb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('is_active', sa.Boolean(), nullable=True))
    op.add_column('users', sa.Column('is_authenticated', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'is_authenticated')
    op.drop_column('users', 'is_active')
    # ### end Alembic commands ###
